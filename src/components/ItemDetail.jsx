import { useState, useEffect } from "react";
import ItemCount from "./ItemCount";
import { NavLink, Link } from "react-router-dom";
import { currencyFormatter } from "./../utils/formatter";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import Loader from "./Loader";

const ItemDetail = ({ product }) => {

  const { cart, cartItems, onAdd } = useContext(CartContext);
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(true);
  useEffect(() => {

    const existProductInCart = cart.find(item => item.uid == product.uid)

    if (existProductInCart) {
      setQuantity(existProductInCart.quantity)
    }
    product && setLoading(false);
  }, [product]);

  const handleClick = () => {
    const productToAdd = { name: product.name, image: product.image, price: product.price, stock: product.stock, uid: product.uid }
    onAdd(productToAdd, quantity)
  }

  return loading ? <Loader /> : (
    <div className="bg-zinc-100 min-w-screen min-h-screen grid place-content-center">

      <div className="container bg-white rounded shadow-sm">
        <div className="flex">
          <img src={product.image} alt={product.name} className="w-1/4" />
          <div className="flex-row py-10 space-y-14">
            <h2 className="text-3xl">{product.name}</h2>
            <h6 className="text-4xl">{currencyFormatter(product.price)}</h6>
            <p className="text-zinc-400 text-sm text-justify">
              {product.description}
            </p>
          </div>
          <div className="flex-row space-y-5 m-5 p-5 min-w-fit border-l border-zinc-200">
            <p className="font-bold">
              Stock disponible{" "}
              <span className="font-light">({product.stock})</span>
            </p>
            <div>
              <ItemCount
                stock={product.stock}
                quantity={quantity}
                setQuantity={setQuantity}
              />
            </div>
            <button
              className="block w-full text-center border border-zinc-700 text-zinc-700 rounded-lg px-5 py-2 hover:text-white hover:bg-zinc-700"
              onClick={handleClick}>
              Agregar al carrito
            </button>
            <NavLink
              to="/cart"
              className="block w-full text-center border border-zinc-700 text-zinc-700 rounded-lg px-5 py-2 hover:text-white hover:bg-zinc-700"
              onClick={handleClick}>
              Comprar
            </NavLink>
            {cartItems > 0 && <NavLink
              to="/cart"
              className="block w-full text-center border border-zinc-700 text-zinc-700 rounded-lg px-5 py-2 hover:text-white hover:bg-zinc-700">
              Ver carrito
            </NavLink>}
            <Link to="/">
              <button className="text-zinc-700 rounded-lg py-1 text-xs mb-2">
                Ver más productos
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
