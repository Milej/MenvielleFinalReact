import Logo from "../img/logo.webp";
import CartWidget from "./CartWidget";
import NavItem from "./NavItem";
import NavList from "./NavList";
import { NavLink } from "react-router-dom";
import LoginIcon from '@mui/icons-material/Login';

function NavBar() {
  return (
    <nav className="navbar bg-orange-200 px-5 py-3">
      <NavLink className="navbar__brand" to="/">
        <img src={Logo} alt="Logo" width="60" />
        <span className="px-3 py-2 font-semibold">Mundo Peludo</span>
      </NavLink>

      <ul className="navbar__navigation">
        <NavItem route="/" texto="Todos los productos" />
        <NavList />
      </ul>

      <div className="flex gap-5">
        <NavLink to="/login"><LoginIcon /></NavLink>
        <CartWidget />
      </div>
    </nav>
  );
}

export default NavBar;
