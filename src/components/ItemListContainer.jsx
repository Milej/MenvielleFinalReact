import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import Loader from "./Loader";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const { categoryId } = useParams();

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

  const filterProducts = products.filter(
    (item) => item.categoryId == categoryId
  );

  return loading ? (
    <Loader />
  ) : (
    <div className="flex flex-col p-10">
      <h1 className="text-4xl self-center p-3">Catálogo de productos</h1>
      <div className="container mx-auto px-10 grid gap-4 grid-cols-5">
        <ItemList products={categoryId ? filterProducts : products} />
      </div>
    </div>
  );
};

export default ItemListContainer;
