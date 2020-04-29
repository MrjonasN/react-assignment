import actionTypes from '../actionTypes'

const INITIAL_STATE = {
    products: [],
    product: {}
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actionTypes().products.fetch:
            // console.log('reducer')
            return {
                ...state,
                dbProducts: action.payload
            }

        default:
            return state
    }
}