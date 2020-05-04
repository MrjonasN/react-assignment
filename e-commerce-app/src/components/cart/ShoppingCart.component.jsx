import React from 'react'
import ShoppingCartProduct from './ShoppingCartProduct.component'

import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

function ShoppingCart() {

    const shoppingCart = useSelector(state => state.cart.shoppingCart)
    const totalCartAmount = useSelector(state => state.cart.totalCartAmount)

    return (
        <div>
            {
                shoppingCart.map((product) => {
                    return <ShoppingCartProduct key={product._id} product={product} />
                })
            }

            {
                shoppingCart.length < 1
                    ? <div className="cart-item">
                        <div className="p-3 d-flex justify-content-center align-items-center">
                            <div className="d-flex align-items-center"><strong>Din kundvagn är tom</strong></div>
                        </div>
                    </div>

                    : <div className="p-2 d-flex justify-content-between align-items-center">
                        <div className="ml-2">
                            <div className="total-price">
                                <h5>Totalt: {totalCartAmount} SEK</h5>
                                <small className="text-muted">inkl. moms</small>
                            </div>
                        </div>
                        <Link to="/checkout">
                            <button type="button" className="btn mx-0 btn-blue">Gå till kassa</button>
                        </Link>
                    </div>
            }

        </div>
    )
}

export default ShoppingCart
