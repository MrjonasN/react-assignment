export default () => {
    return {
        products: {
            fetchProducts: 'FETCH_PRODUCTS',
            fetchProduct: 'FETCH_PRODUCT'
        },
        cart: {
            add: 'ADD_TO_CART',
            remove: 'REMOVE_FROM_CART',
            delete: 'DELETE_PRODUCT_FROM_CART'
        }
    }
}