import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { currencyFormatter } from "../utils/formatter";
import ItemCount from "./ItemCount";
import { Link, NavLink } from "react-router-dom";

const Cart = () => {
  const { cart, setCart, cartItems } = useContext(CartContext);

  const removeProduct = (id) => {
    const updateCart = cart.filter(item => item.id != id)
    setCart(updateCart)
  }

  return (
    <div className="bg-zinc-100 p-10 flex shadow-sm">
      <div className="container bg-white rounded-sm shadow-sm">
        <h1 className="text-lg font-semibold px-5 py-5">
          {cartItems > 0 ? "Productos a comprar" : "No hay productos en el carrito :("}
        </h1>

        {cartItems > 0 && (
          cart.map((item) => (
            <div className="grid grid-cols-4 gap-10 p-5 border-t border-b border-zinc-200" key={item.id}>
              <div className="flex col-span-2">
                <Link to={`/item/${item.id}`}>
                  <img src={item.image} alt={item.name} className="w-32 h-32" />
                </Link>
                <div>
                  <Link to={`/item/${item.id}`}>
                    <h2 className="text-md font-semibold">{item.name}</h2>
                  </Link>
                  <button type="button" onClick={() => removeProduct(item.id)} className="text-red-500 my-6">Quitar producto</button>
                </div>
              </div>
              <div className="grid justify-center">
                <ItemCount
                  stock={item.stock}
                  quantity={item.quantity}
                  setQuantity={""}
                />
                <span className="text-center text-xs text-zinc-400">{item.stock} disponibles</span>
              </div>
              <div className="text-center">
                <p className="text-2xl">$0.000</p>
              </div>
            </div>
          ))
        )}
      </div>
      <div className="container flex flex-col bg-white rounded-md max-w-xs mx-4 shadow-sm">
        <div className="border-b border-zinc-200 px-5 py-5">
          <h6 className="text-lg font-semibold">
            Resumen de la compra
          </h6>
        </div>
        <div className="px-5 py-5">
          <div className="flex justify-between text-sm pb-2">
            <p>Productos</p>
            <p>0000</p>
          </div>
          <div className="flex justify-between text-sm pb-2">
            <p>Productos</p>
            <p>0000</p>
          </div>
        </div>
        <div className="px-5 py-5">
          <div className="flex justify-between text-sm pb-2">
            <p className="font-semibold text-xl">Total</p>
            <p className="font-semibold text-xl">$ 0.000</p>
          </div>
        </div>
        <div className="px-5 py-5">
          <Link to="/checkout">
            <button className="block w-full text-center border border-zinc-700 text-zinc-700 rounded-lg px-5 py-2 hover:text-white hover:bg-zinc-700 mb-2">
              Continuar compra
            </button>
          </Link>
          <button className="text-center text-zinc-700 rounded-lg py-1 text-xs mb-2">
            <Link to="/">Seguir comprando</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
