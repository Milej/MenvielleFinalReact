import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import Loader from "./Loader";
import { useParams } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore"
import { db } from "../services/firebase/firebase";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const { categoryId } = useParams();

  useEffect(() => {

    const itemCollection = collection(db, "products")

    getDocs(itemCollection)
      .then((snapshot) => {
        const docs = snapshot.docs.map((doc) => {
          const data = doc.data()
          return { ...data, uid: doc.id }
        })
        setProducts(docs)
      })
      .finally(() => setLoading(false));

  }, []);

  const filterProducts = products.filter((item) => item.categoryId == categoryId);

  return loading ? (
    <Loader />
  ) : (
    <div className="flex flex-col p-10">
      <h1 className="text-4xl self-center p-3">Catálogo de productos</h1>
      <div className="container mx-auto px-10 grid gap-4 grid-cols-5">
        {filterProducts.length == 0 && categoryId ? <h1 className="text-3xl col-span-5 place-self-center my-24">No hay productos en esta categoria :(</h1> : ''}
        <ItemList products={categoryId ? filterProducts : products} />
      </div>
    </div>
  );
};

export default ItemListContainer;
