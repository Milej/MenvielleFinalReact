import { useContext, useEffect, useState } from "react";
import { CartContext } from "../context/CartContext";
import { currencyFormatter } from "../utils/formatter";
import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, setCart, cartItems, total, setTotal, shipping, setShipping } = useContext(CartContext);

  const [productsTotal, setProductsTotal] = useState(0);
  const [disabled, setDisabled] = useState("disabled")

  useEffect(() => {
    if (cartItems > 0) {
      setShipping(3500)
      setDisabled("")
    }else{
      setShipping(0)
    }
    setProductsTotal(cart.reduce((acc, curr) => acc + (curr.price * curr.quantity), 0))
    setTotal(parseFloat(shipping) + parseFloat(productsTotal))
  }, [productsTotal, cart])

  const removeProduct = (id) => {
    const updateCart = cart.filter(item => item.id != id)
    // setProductsTotal(0)
    setCart(updateCart)
  }

  const changeProductQuantity = (qty, id) => {
    const updateItemQty = cart.find(item => item.id == id)
    updateItemQty.quantity = qty;
    setProductsTotal(cart.reduce((acc, curr) => acc + (curr.price * curr.quantity), 0))
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
                <Link to={`/item/${item.uid}`}>
                  <img src={item.image} alt={item.name} className="w-32 h-32" />
                </Link>
                <div>
                  <Link to={`/item/${item.uid}`}>
                    <h2 className="text-md font-semibold">{item.name}</h2>
                  </Link>
                  <button type="button" onClick={() => removeProduct(item.id)} className="text-red-500 my-6">Quitar producto</button>
                </div>
              </div>
              <div className="grid justify-center">
                <ItemCount
                  id={item.id}
                  stock={item.stock}
                  quantity={item.quantity}
                  setQuantity={changeProductQuantity}
                />
                <span className="text-center text-xs text-zinc-400">{item.stock} disponibles</span>
              </div>
              <div className="text-center">
                <p className="text-2xl">{currencyFormatter(item.price * item.quantity)}</p>
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
            <p>{currencyFormatter(productsTotal)}</p>
          </div>
          <div className="flex justify-between text-sm pb-2">
            <p>Envío</p>
            <p>{currencyFormatter(shipping)}</p>
          </div>
        </div>
        <div className="px-5 py-5">
          <div className="flex justify-between text-sm pb-2">
            <p className="font-semibold text-xl">Total</p>
            <p className="font-semibold text-xl">{currencyFormatter(total)}</p>
          </div>
        </div>
        <div className="px-5 py-5">
          <Link to="/checkout">
            <button className="block w-full text-center border border-zinc-700 text-zinc-700 rounded-lg px-5 py-2 hover:text-white hover:bg-zinc-700 mb-2 disabled:bg-gray-200 disabled:hover:text-zinc-700 disabled:hover:cursor-not-allowed" {...{ disabled }}>
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
