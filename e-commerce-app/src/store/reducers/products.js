import actionTypes from '../actionTypes'

const INITIAL_STATE = {
    products: [],
    product: {}
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actionTypes().products.fetch:
            // console.log('reducer')
                state.products = action.payload
                return state

        default:
            return state
    }
}