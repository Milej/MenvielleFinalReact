import React from 'react'
import Logo from '../img/logo.webp';
import CartWidget from './CartWidget';
import NavItem from './NavItem';
import NavList from './NavList';


function NavBar() {
  
  return (
    
    <nav className="navbar bg-orange-200 px-5 py-3">

      <a className="navbar__brand" href="#">
        <img src={Logo} alt="Logo" width="60" />
        <span className='px-3 py-2'>Mundo Peludo</span>
      </a>

      <ul className="navbar__navigation">
        <NavItem route="#" texto="Inicio"/>
        <NavList/>
      </ul>

      <CartWidget/> 

    </nav>
  )
}

export default NavBar