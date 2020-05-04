import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.styles.css'
import ShoppingCart from '../cart/ShoppingCart.component'

import { useSelector } from 'react-redux'

const Navbar = () => {

  const totalCartQuantity = useSelector(state => state.cart.totalCartQuantity)

  return (
    <nav className="mb-1 navbar navbar-expand-lg navbar-dark elegant-color">
      <div className="container">
        <Link to="/" className="navbar-brand">
          <i className="fab fa-shopware"></i> shopware.se
          </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent-333"
          aria-controls="navbarSupportedContent-333"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent-333">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">Nyheter</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/clothes">Kläder</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/shoes">Skor</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/accessories">Accessoarer</Link>
            </li>
          </ul>
          <ul className="navbar-nav ml-auto nav-flex-icons">

            <li className="nav-item dropdown">
              <button
                className="nav-link btn m-0 mr-2"
                type="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <span className="product-counter">{totalCartQuantity}</span>
                <i className="fas fa-shopping-cart"></i>
              </button>
              <div className="dropdown-menu dropdown-menu-right z-depth-2 shopping-cart">
                <ShoppingCart />
              </div>
            </li>


            {/* 
            <li className="nav-item dropdown">
              <a
                className="nav-link mr-2 dropdown-toggle"
                type="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i className="fas fa-user"></i>
              </a>
              <div className="dropdown-menu dropdown-menu-right z-depth-2">
                <UserSettings />
              </div>
            </li> */}

            <li className="nav-item">
              <Link className="nav-link mt-1" to="/signin">Logga in</Link>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
