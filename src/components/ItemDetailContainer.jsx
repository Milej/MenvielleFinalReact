import { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import { doc, getDoc } from "firebase/firestore"
import { db } from "../services/firebase/firebase";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {

  const { id } = useParams();

  const [product, setProduct] = useState("");

  useEffect(() => {

    const item = doc(db, "products", id)

    getDoc(item)
      .then(snapshot => {
        if (snapshot.exists()) {
          const doc = snapshot.data()
          setProduct({ ...doc, uid: snapshot.id })
        }
      })
  }, [])

  return <ItemDetail product={product} />;
};

export default ItemDetailContainer;
