import React from 'react'

const NavItem = ({route, texto}) => {
  return (
    <a href={route} className='px-3 py-2'>{texto}</a>
  )
}

export default NavItem