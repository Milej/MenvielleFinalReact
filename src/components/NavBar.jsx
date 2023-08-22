import CartWidget from "./CartWidget";
import NavItem from "./NavItem";
import NavList from "./NavList";
import { NavLink, useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext"
import { useContext, useEffect } from "react";
import { Logout, Login } from "@mui/icons-material";
import { signOut } from "firebase/auth"
import { auth } from "../services/firebase/firebase";

function NavBar() {

  const navigate = useNavigate()

  const { logged, setLogged } = useContext(UserContext)

  const handleOnClick = () => {
    signOut(auth)
      .then(() => setLogged(false))
  }
  return (
    <nav className="navbar bg-orange-200 px-5 py-3">
      <NavLink className="navbar__brand" to="/">
        <img src="http://resource.ferozo.net/curso-react/logo.webp" alt="Logo" width="60" />
        <span className="px-3 py-2 font-semibold">Mundo Peludo</span>
      </NavLink>

      <ul className="navbar__navigation">
        <NavItem route="/" texto="Todos los productos" />
        <NavList />
      </ul>

      <div className="flex gap-5">
        {logged && <NavLink to="/orders">Ordenes</NavLink>}
        {!logged ? <NavLink to="/login"><Login /></NavLink> : <NavLink to="" onClick={handleOnClick}><Logout /></NavLink>}
        <CartWidget />
      </div>
    </nav>
  );
}

export default NavBar;
