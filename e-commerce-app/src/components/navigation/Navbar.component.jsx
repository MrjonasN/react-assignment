import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.styles.css'
import ShoppingCart from '../cart/ShoppingCart.component'

import { MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBIcon } from "mdbreact";

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

            <li>
              <MDBDropdown>
                <MDBDropdownToggle nav caret>
                  <MDBIcon icon="shopping-cart" className="fa-shopping-cart mr-2" /> Kundvagn
                  <span className="product-counter"> ({totalCartQuantity})</span>
                </MDBDropdownToggle>
                <MDBDropdownMenu right basic className="dropdown-default shopping-cart">

                  <ShoppingCart />

                </MDBDropdownMenu>
              </MDBDropdown>
            </li>

            <li className="nav-item">

              <Link className="nav-link mt-1" to="/signin"><i className="fas fa-user mr-2 ml-2"></i>Logga in</Link>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
