import actionTypes from '../actionTypes'

export const fetchProducts = () => {
    return dispatch => {
        fetch('http://localhost:5000/api/products/')
            .then(res => res.json())
            .then(items => {
                // console.log(items.products)
                dispatch({
                    type: actionTypes().products.fetch,
                    payload: items.products
                })})
    }
}