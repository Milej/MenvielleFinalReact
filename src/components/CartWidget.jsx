import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";

const CartWidget = () => {
  return (
    <Link to="/cart" className="navbar__link relative">
      <ShoppingCartIcon />
      <span className="text-sm pl-1">1</span>
    </Link>
  );
};

export default CartWidget;
