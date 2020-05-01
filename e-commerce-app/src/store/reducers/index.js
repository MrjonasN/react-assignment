import { combineReducers } from 'redux'


import products from './productReducer'
import cartReducer from './cartReducer'

export default combineReducers({
    products: products,
    cart: cartReducer
})