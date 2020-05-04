import actionTypes from '../actionTypes'

export const addToCart = (product) => {
    return {
        type: actionTypes().cart.add,
        payload: product
    }
}

export const decrementInCart = (id) => {
    return {
        type: actionTypes().cart.remove,
        payload: id
    }
}

export const deleteProductFromCart = (id) => {
    return {
        type: actionTypes().cart.delete,
        payload: id
    }
}