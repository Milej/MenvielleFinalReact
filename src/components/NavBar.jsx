import React from 'react'

function NavBar() {
  return (
    <div>
      <nav className="navbar">

      <a className="navbar__brand" href="#">
        <img src="#" alt="Logo" width="30" height="24" className="navbar__logo" />
        Mascotienda Zamba
      </a>

      <ul className="navbar__navigation">

        <li className="navbar__item">

          <a href="#" className="navbar__link">
            <img src="#" />
            <span className="navbar__counter" id="cartItems">0</span>
          </a>

        </li>

      </ul>

      </nav>
    </div>
  )
}

export default NavBar