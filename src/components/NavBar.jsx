import React from "react";
import Logo from "../img/logo.webp";
import CartWidget from "./CartWidget";
import NavItem from "./NavItem";
import NavList from "./NavList";
import InputSearch from "./InputSearch";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav className="navbar bg-orange-200 px-5 py-3">
      <NavLink className="navbar__brand" to="/">
        <img src={Logo} alt="Logo" width="60" />
        <span className="px-3 py-2 font-semibold">Mundo Peludo</span>
      </NavLink>

      <ul className="navbar__navigation">
        <NavItem route="/" texto="Inicio" />
        <NavList />
      </ul>

      <div className="flex gap-5">
        <InputSearch />
        <CartWidget />
      </div>
    </nav>
  );
}

export default NavBar;
