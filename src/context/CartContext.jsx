import { createContext, useState } from "react";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const CartContext = createContext(null)

export const ShoppingCartProvider = ({ children }) => {

  const [cart, setCart] = useState([])
  const cartItems = cart.length;
  const [total, setTotal] = useState(0);
  const [shipping, setShipping] = useState(0);

  const onAdd = (product, quantity) => {

    const existentInCart = cart.find((item) => item.uid == product.uid);

    if (existentInCart == undefined) {
      toast.success(`${product.name} producto agregado al carrito`, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      setCart((current) => [...current, { ...product, quantity }]);

    } else {
      if (product.stock >= quantity) {
        toast.success(`${product.name} actualizado en el carrito`, {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        existentInCart.quantity = quantity;
      }
    }

    setTotal(parseFloat(total) + parseFloat(product.price * quantity))
  }

  const onReset = () => {
    setCart([])
    setTotal(0)
    setShipping(0)
  }

  return (
    <CartContext.Provider value={{ cart, setCart, cartItems, onAdd, total, setTotal, shipping, setShipping, onReset }}>
      {children}
    </CartContext.Provider>
  )
}

export default ShoppingCartProvider