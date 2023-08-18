import { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import Loader from "./Loader";

const ItemDetailContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const getProducts = async () => {
    const response = await fetch("../../api.json");
    const data = await response.json();
    return data;
  };

  useEffect(() => {
    getProducts()
      .then((product) => {
        setProducts(product);
      })
      .finally(() => setLoading(false));
  }, []);

  return loading ? <Loader /> : <ItemDetail products={products} />;
};

export default ItemDetailContainer;
