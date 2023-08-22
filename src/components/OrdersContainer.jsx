import { collection, getDocs } from "firebase/firestore"
import { db } from "../services/firebase/firebase";
import { useContext, useState } from "react";
import { useEffect } from "react";
import Order from "./Order"
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../services/firebase/firebase";

const OrdersContainer = () => {

  const [orders, setOrders] = useState([])

  const { setLogged } = useContext(UserContext)
  const navigate = useNavigate();

  useEffect(() => {

    onAuthStateChanged(auth, (user) => {
      if (user) {
        const ordersCollection = collection(db, "orders")

        getDocs(ordersCollection)
          .then((snapshot) => {
            const docs = snapshot.docs.map((doc) => {
              const data = doc.data()
              return { ...data, uid: doc.id }
            })
            setOrders(docs)
          })

      } else {
        setLogged(false)
        navigate("/login")
      }
    });
  }, [])

  return (<div className="grid grid-cols-4 container mx-auto py-12 gap-5"> {orders.length > 0 ? <Order orders={orders} /> : <h1>No hay ordenes aún</h1>}</div>
  )
}

export default OrdersContainer