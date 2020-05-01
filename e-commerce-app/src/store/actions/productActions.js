import actionTypes from '../actionTypes'
import axios from 'axios'

// FETCH PRODUCTS FROM API
export const fetchProducts = () => {
    return async dispatch => {
        const res = await axios.get('http://localhost:5000/api/products/')
        dispatch(setProducts(res.data.products))
    }
}

export const fetchProduct = (id) => {
    return async dispatch => {
        const res = await axios.get('http://localhost:5000/api/products/' + id)
        dispatch(setProduct(res.data))
    }
}

// SET PRODUCTS
export const setProducts = (products) => {
    return {
        type: actionTypes().products.fetchProducts,
        payload: products
    }
}

export const setProduct = (product) => {
    return {
        type: actionTypes().products.fetchProduct,
        payload: product
    }
}


