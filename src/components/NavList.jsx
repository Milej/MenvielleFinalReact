import React from 'react'
// Intente hacer que se pueda abrir y solo pude averiguar que hace usar un useState, por lo que no lo hice. Quedará para implementar en la proxima entrega.
const NavList = () => {
  return (
    <div>
      <div>
      <button type="button" className="inline-flex w-full px-3 py-2" id="menu-button" aria-expanded="true" aria-haspopup="true">
      Categorías
      <svg className="-mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
      </svg>
      </button>
      </div>

      <div className="absolute z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex="-1">
        <div className="py-1" role="none">
          <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-item-0">Alimento</a>
          <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-item-1">Paseos</a>
          <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-item-2">Juguete</a>
        </div>
      </div>
    </div>
    
  )
}

export default NavList