import actionTypes from '../actionTypes'

const INITIAL_STATE = {
    shoppingCart: [],
    totalCartQuantity: 0,
    totalCartAmount: 0
}

export default (state = INITIAL_STATE, action) => {
    let itemIndex

    switch (action.type) {
        // ADD ITEMS TO CART
        case actionTypes().cart.add:
            itemIndex = state.shoppingCart.findIndex(product => product._id === action.payload._id)

            itemIndex < 0
                ? state.shoppingCart = [...state.shoppingCart, action.payload]
                : state.shoppingCart[itemIndex].quantity += 1

            state.totalCartQuantity = getTotalQuantity(state.shoppingCart)
            state.totalCartAmount = getTotalAmount(state.shoppingCart)
            localStorage.setItem('cart', JSON.stringify(state))
            return state

        // DECREMENT ITEMS FROM CART
        case actionTypes().cart.remove:
            itemIndex = state.shoppingCart.findIndex(product => product._id === action.payload)

            state.shoppingCart[itemIndex].quantity === 1
                ? state.shoppingCart = state.shoppingCart.filter(item => item._id !== action.payload)
                : state.shoppingCart[itemIndex].quantity -= 1

            state.totalCartQuantity = getTotalQuantity(state.shoppingCart)
            state.totalCartAmount = getTotalAmount(state.shoppingCart)
            localStorage.setItem('cart', JSON.stringify(state))
            return state

        // DELETE PRODUCT FROM CART
        case actionTypes().cart.delete:

            itemIndex = state.shoppingCart.findIndex(product => product._id === action.payload)
            state.shoppingCart[itemIndex].quantity = 1

            state.shoppingCart = state.shoppingCart.filter(item => item._id !== action.payload)
            state.totalCartQuantity = getTotalQuantity(state.shoppingCart)
            state.totalCartAmount = getTotalAmount(state.shoppingCart)

            localStorage.setItem('cart', JSON.stringify(state))
            return state

        default:
            let cart = JSON.parse(localStorage.getItem('cart'))
            if (cart) state = cart

            return state
    }
}

const getTotalQuantity = (items) => {
    let totalQuantity = 0

    items.forEach(product => {
        totalQuantity += product.quantity
    })
    return totalQuantity
}

const getTotalAmount = (items) => {
    let totalAmount = 0

    items.forEach(product => {
        totalAmount += product.price * product.quantity
    });

    return totalAmount
}
