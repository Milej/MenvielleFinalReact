import { createContext, useState } from "react";

export const CartContext = createContext(null)

export const ShoppingCartProvider = ({children}) => {

  const [cart, setCart] = useState([])
  const cartItems = cart.length;

  return (
    <CartContext.Provider value={{cart, setCart, cartItems}}>
      {children}
    </CartContext.Provider>
  )
}

export default ShoppingCartProvider