import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../../store/actions/productActions'
import ProductCard from './ProductCard.component'

function ProductCardDeck() {

    const dispatch = useDispatch()
    const products = useSelector(state => state.products.products)

    useEffect(() => {
        dispatch(fetchProducts())
    }, [dispatch])


    return (
        <section className="text-center">
            <div className="row">

                {
                    products.map((product) => {
                        return <ProductCard key={product._id} product={product} />
                    })
                }

            </div>
        </section>
    )
}

export default ProductCardDeck

