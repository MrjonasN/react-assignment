import actionTypes from '../actionTypes'

const INITIAL_STATE = {
    products: [],
    product: {}
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actionTypes().products.fetchProducts:
                state.products = action.payload
                return state

        case actionTypes().products.fetchProduct:
                state.product = action.payload
                return state

        default:
            return state
    }
}