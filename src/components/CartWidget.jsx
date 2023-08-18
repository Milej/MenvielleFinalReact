import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const CartWidget = () => {
  const { cartItems } = useContext(CartContext);
  return (
    <Link to="/cart" className="navbar__link relative">
      <ShoppingCartIcon />
      <span className="text-sm pl-1">{cartItems > 0 ? cartItems : ""}</span>
    </Link>
  );
};

export default CartWidget;
