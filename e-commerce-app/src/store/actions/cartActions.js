import actionTypes from '../actionTypes'

export const addToCart = (product) => {
    return {
        type: actionTypes().cart.add,
        payload: product
    }
}
