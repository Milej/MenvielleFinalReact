import { useState } from "react";
import { NavLink } from "react-router-dom";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

// Intente hacer que se pueda abrir y solo pude averiguar que hace usar un useState, por lo que no lo hice. Quedará para implementar en la proxima entrega.
const NavList = () => {
  const [open, setOpen] = useState(false);

  function openMenu() {
    !open ? setOpen(true) : setOpen(false);
  }

  return (
    <div>
      <button
        type="button"
        className="inline-flex w-full px-3 py-2 hover:font-bold"
        id="menu-button"
        onClick={openMenu}
      >
        Categorías
        {open ? <ExpandLessIcon /> : <ExpandMoreIcon />}
      </button>

      <div
        className={`${
          open ? "block" : "hidden"
        } absolute z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`}
      >
        <div className="py-1" role="none">
          <NavLink
            to={"category/alimento"}
            className="text-gray-700 block px-4 py-2 text-sm hover:bg-orange-300"
            role="menuitem"
            tabIndex="-1"
            id="menu-item-0"
          >
            Alimento
          </NavLink>
          <NavLink
            to={"category/paseos-viajes"}
            className="text-gray-700 block px-4 py-2 text-sm hover:bg-orange-300"
            role="menuitem"
            tabIndex="-1"
            id="menu-item-1"
          >
            Paseos y viajes
          </NavLink>
          <NavLink
            to={"category/juguetes"}
            className="text-gray-700 block px-4 py-2 text-sm hover:bg-orange-300"
            role="menuitem"
            tabIndex="-1"
            id="menu-item-2"
          >
            Juguetes
          </NavLink>
          <NavLink
            to={"category/camas"}
            className="text-gray-700 block px-4 py-2 text-sm hover:bg-orange-300"
            role="menuitem"
            tabIndex="-1"
            id="menu-item-3"
          >
            Camas
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default NavList;
