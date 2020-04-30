import React from 'react'
import { Link } from 'react-router-dom'

const ProductCard = (props) => {
    return (
        <div className="col-lg-4 col-md-12 mb-4">
            <div className="card">
                <div className="view overlay">
                    <img className="card-img-top" src={props.product.image}
                        alt="Card"></img>
                    <Link to={`/products/details/${props.product._id}`}>
                        <div className="mask rgba-white-slight"></div>
                    </Link>
                </div>

                <div className="card-body text-left">
                    <h4 className="mb-1 py-2">{props.product.name}</h4>
                    <p className="mb-1 py-2">{props.product.short}</p>
                    <h4 className="mb-1 py-2"><strong>{props.product.price} SEK </strong></h4>
                    <Link to={`/products/details/${props.product._id}`}>
                        <button type="button" className="btn btn-blue px-3 mx-0 mt-3 waves-effect">Visa produkt</button>
                    </Link>

                </div>
            </div>
        </div>
    )
}

export default ProductCard
