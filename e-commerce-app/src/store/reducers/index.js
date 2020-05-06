import { combineReducers } from 'redux'

import products from './productReducer'
import cartReducer from './cartReducer'
import usersReducer from './usersReducer'

export default combineReducers({
    products: products,
    cart: cartReducer,
    users: usersReducer
})