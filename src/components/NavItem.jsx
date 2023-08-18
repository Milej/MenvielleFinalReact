import React from 'react'
import { NavLink } from 'react-router-dom'

const NavItem = ({route, texto}) => {
  return (
    <NavLink to={route} className="px-3 py-2 hover:font-bold">{texto}</NavLink>
  )
}

export default NavItem