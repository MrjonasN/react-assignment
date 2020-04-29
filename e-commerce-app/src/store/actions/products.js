import actionTypes from '../actionTypes'


export const fetchProducts = () => {
    return dispatch => {
        // console.log('fetching')
        fetch('http://localhost:5000/api/products/')
            .then(res => res.json())
            .then(items =>
                dispatch({
                    type: actionTypes().products.fetch,
                    payload: items
                }))
        // console.log('fetching out')
    }
}

