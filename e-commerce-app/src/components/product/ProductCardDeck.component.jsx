// import React, { Component } from 'react'
import ProductCard from './ProductCard.component'

// import { connect } from 'react-redux'
// import { fetchProducts } from '../../store/actions/products'

// class ProductCardDeck extends Component {

//     componentDidMount() {
//         this.props.fetchProducts()
//     }

//     render() {
//         console.log(this.props.products);
//         return (
//             <section className="text-center">
//                 <div className="row">

//                     {
//                         this.props.products.map(product => {

//                             return <ProductCard key={product._id} product={product} />
//                         })
//                     }

//                 </div>
//             </section>
//         )
//     }
// }

// const mapStateToProps = state => ({
//     products: state.products.dbProducts
// })

// export default connect(mapStateToProps, { fetchProducts })(ProductCardDeck)
















import React, { useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../../store/actions/products'

function ProductCardDeck() {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchProducts())
    }, [])

    const products = useSelector(state => state.products.dbProducts)
    console.log(products);
    // console.log(products.name) // TypeError: Cannot read property 'name' of undefined


    return (
        <section className="text-center">
            <div className="row">

                {/* {
                    products.map(product => {
                        return <ProductCard key={product._id} product={product} />
                    })
                } */}

            </div>
        </section>
    )
}

export default ProductCardDeck

