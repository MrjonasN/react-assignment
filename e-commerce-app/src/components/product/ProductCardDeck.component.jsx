import React, { Component } from 'react'
import ProductCard from './ProductCard.component'

export default class ProductCardDeck extends Component {
    constructor() {
        super()

        this.state = {
            products: []
        }
    }

    componentDidMount() {
        fetch('http://localhost:5000/api/products')
            .then(res => res.json())
            .then(data => {
                this.setState({products: data.product})
            })
    }


    render() {
        return (
            <section className="text-center">
                <div className="row">

                    {
                        this.state.products.map(product => {
                        
                        return <ProductCard key={product._id} product={product}/>
                        })
                    }

                </div>
            </section>
        )
    }
}

