import React from 'react'
import './ShoppingCartProduct.styles.css'

import { useDispatch } from 'react-redux'
import { addToCart, decrementInCart, deleteProductFromCart } from '../../store/actions/cartActions'

function ShoppingCartProduct(props) {

    const dispatch = useDispatch()

    const add = (product) => {
        dispatch(addToCart(product))
    }

    const remove = (id) => {
        dispatch(decrementInCart(id))
    }
    
    const deleteProduct = (id) => {
        dispatch(deleteProductFromCart(id))
    }


    return (
        <div className="cart-item">
            <div className="p-2 d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center">
                    <img src={props.product.image} alt="" className="img-fluid image-width"></img>
                    <div>
                        <div>
                            <strong>{props.product.name}</strong>
                        </div>
                        <div>
                            <small>{props.product.quantity} x {props.product.price} SEK</small>
                        </div>
                    </div>
                </div>
                <div className="btn-group btn-group-sm" role="group" aria-label="quantity">
                    <button onClick={() => remove(props.product._id)} type="button" className="btn btn-grey btn-sm px-3">-</button>
                    <button onClick={() => add(props.product)} type="button" className="btn btn-grey btn-sm px-3" >+</button>
                </div>

                <div className="btn-group btn-group-sm" role="group" aria-label="trash">
                    <button onClick={() => deleteProduct(props.product._id)} className="btn btn-danger px-3">
                        <i className="fas fa-trash"></i>
                    </button>
                </div>
            </div>
            <div className="dropdown-divider"></div>
        </div>
    )
}

export default ShoppingCartProduct
