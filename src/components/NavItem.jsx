import React from 'react'
import { NavLink } from 'react-router-dom'

const NavItem = ({route, texto}) => {
  return (
    <NavLink to={route} className={isActive => "nav-link" ? "px-3 py-2 font-bold border-b-2 border-b-orange-700" : "px-3 py-2 hover:font-bold"}>{texto}</NavLink>
  )
}

export default NavItem