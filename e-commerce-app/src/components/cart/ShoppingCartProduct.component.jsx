import React from 'react'

import './ShoppingCartProduct.styles.css'

function ShoppingCartProduct() {
    return (

        <div className="cart-item">
            <div className="p-2 d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center">
                    <img src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/14.jpg" alt="" className="img-fluid image-width"></img>
                    <div>
                        <div>
                            <strong>Philips Headphones</strong>
                        </div>
                        <div>
                            <small>1 x 5775 SEK</small>
                        </div>
                    </div>

                    <div className=" ml-5 btn-group btn-group-sm" role="group" aria-label="quantity">
                        <button type="button" className="btn btn-grey px-3">-</button>
                        <button type="button" className="btn btn-grey px-3" >+</button>
                    </div>

                    <div className="btn-group btn-group-sm" role="group" aria-label="trash">
                        <button className="btn btn-danger px-3">
                            <i className="fas fa-trash"></i>
                        </button>
                    </div>

                </div>

            </div>
            <div className="dropdown-divider"></div>
        </div>

    )
}

export default ShoppingCartProduct
