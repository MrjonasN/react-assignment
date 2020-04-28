import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class ProductCardDeck extends Component {
    render() {
        return (
            <section className="text-center">

                <div className="row">

                    <div className="col-lg-4 col-md-12 mb-4">
                        <div className="card">
                            <div className="view overlay">
                                <img className="card-img-top" src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/shoes%20(6).jpg"
                                    alt="Card"></img>
                                <Link to="/product">
                                    <div className="mask rgba-white-slight"></div>
                                </Link>
                            </div>

                            <div className="card-body">
                                <p className="mb-1"><Link to="/" className="font-weight-bold black-text">Adidas Air Max</Link></p>
                                <h4 className="mb-1 py-2"><small className="mr-1"><s>$299</s></small><strong>$99</strong></h4>
                                <button type="button" className="btn btn-blue px-3 waves-effect">Visa produkt</button>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        )
    }
}
