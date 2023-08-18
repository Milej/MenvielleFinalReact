import { useState, useEffect } from "react";
import ItemCount from "./ItemCount";
import { useParams, NavLink } from "react-router-dom";
import { currencyFormatter } from "./../utils/formatter";

const ItemDetail = ({ products }) => {
  const { id } = useParams();

  const [product, setProduct] = useState("");
  // const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const findProduct = products.find((item) => item.id == id);
    setProduct(findProduct);
  }, []);

  const onAdd = () => {
    // const productAdd = 
  }

  return (
    <div className="bg-gray-200 min-w-screen min-h-screen grid place-content-center">
      <div className="container bg-white">
        <div className="flex">
          <img src={product.image} alt={product.name} className="w-1/4" />
          <div className="flex-row py-10 space-y-14">
            <h2 className="text-3xl">{product.name}</h2>
            <h6 className="text-4xl">{currencyFormatter(product.price)}</h6>
            <p className="text-zinc-400 text-sm text-justify">
              {product.description}
            </p>
          </div>
          <div className="flex-row space-y-14 m-5 p-5 min-w-fit border-l border-zinc-200">
            <p className="font-bold">
              Stock disponible{" "}
              <span className="font-light">({product.stock})</span>
            </p>
            <ItemCount stock={product.stock}/>
            <NavLink to="/cart" className="block w-full text-center border border-zinc-700 text-zinc-700 rounded-lg px-5 py-2 hover:text-white hover:bg-zinc-700">
              Agregar al carrito
            </NavLink>
            <NavLink to="/checkout" className="block w-full text-center border border-zinc-700 text-zinc-700 rounded-lg px-5 py-2 hover:text-white hover:bg-zinc-700">
              Comprar
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
