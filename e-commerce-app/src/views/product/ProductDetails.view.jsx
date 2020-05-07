import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'

import { fetchProduct } from '../../store/actions/productActions'
import { addToCart } from '../../store/actions/cartActions'

function ProductDetails() {

    const { id } = useParams()
    const dispatch = useDispatch()

    const product = useSelector(state => state.products.product)

    // GET PRODUCTS
    useEffect(() => {
        dispatch(fetchProduct(id))
    }, [dispatch, id])

    // ADD TO CART
    const add = (product) => {
        dispatch(addToCart(product))
    }

    return (
        <div>
            <div className="container my-5 py-5 z-depth-1">
                <section className="text-center">

                    <h3 className="font-weight-bold mb-5">Produktinformation</h3>

                    <div className="row">

                        <div className="col-lg-6">

                            <div id="carousel-thumb" className="carousel slide carousel-fade carousel-thumbnails" data-ride="carousel">
                                <div className="carousel-inner text-center text-md-left" role="listbox">
                                    <div className="carousel-item active">
                                        <img src={product.image} alt="" className="img-fluid"></img>
                                    </div>
                                </div>
                                <a className="carousel-control-prev" href="#carousel-thumb" role="button" data-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="sr-only">Previous</span>
                                </a>
                                <a className="carousel-control-next" href="#carousel-thumb" role="button" data-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="sr-only">Next</span>
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-5 text-center text-md-left">
                            <h2 className="h2-responsive text-center text-md-left product-name font-weight-bold dark-grey-text mb-1 ml-xl-0 ml-4">
                                <strong> {product.name} </strong>
                            </h2>
                            <h3 className="h3-responsive text-center text-md-left mb-5 ml-xl-0 ml-4">
                                <span className="red-text font-weight-bold">
                                    <strong> {product.price} SEK</strong>
                                </span>
                            </h3>
                            <div className="accordion md-accordion" id="accordionEx" role="tablist" aria-multiselectable="true">
                                <div className="card">
                                    <div className="card-header" role="tab" id="headingOne1">
                                        <a data-toggle="collapse" data-parent="#accordionEx" href="#collapseOne1" aria-expanded="true"
                                            aria-controls="collapseOne1">
                                            <h5 className="mb-0">
                                                Description
                                                <i className="ml-2 fas fa-angle-down rotate-icon"></i>
                                            </h5>
                                        </a>
                                    </div>
                                    <div id="collapseOne1" className="collapse" role="tabpanel" aria-labelledby="headingOne1"
                                        data-parent="#accordionEx">
                                        <div className="card-body">
                                            {product.desc}
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-header" role="tab" id="headingTwo2">
                                        <a className="collapsed" data-toggle="collapse" data-parent="#accordionEx" href="#collapseTwo2"
                                            aria-expanded="false" aria-controls="collapseTwo2">
                                            <h5 className="mb-0">
                                                Details
                                                <i className=" ml-2 fas fa-angle-down rotate-icon"></i>
                                            </h5>
                                        </a>
                                    </div>
                                    <div id="collapseTwo2" className="collapse-show" role="tabpanel" aria-labelledby="headingTwo2"
                                        data-parent="#accordionEx">
                                        <div className="card-body">
                                            {product.short}
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-header" role="tab" id="headingThree3">
                                        <a className="collapsed" data-toggle="collapse" data-parent="#accordionEx" href="#collapseThree3"
                                            aria-expanded="false" aria-controls="collapseThree3">
                                            <h5 className="mb-0">
                                                Shipping
                                                    <i className="ml-2 fas fa-angle-down rotate-icon"></i>
                                            </h5>
                                        </a>
                                    </div>
                                    <div id="collapseThree3" className="collapse" role="tabpanel" aria-labelledby="headingThree3"
                                        data-parent="#accordionEx">
                                        <div className="card-body">
                                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.
                                            3 wolf moon officia aute,
                                            non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf
                                            moon
                                            tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.
                                            </div>
                                    </div>
                                </div>
                            </div>
                            <section className="color">
                                <div className="mt-5">
                                    <div className="row mt-3">
                                        <div className="col-md-12 text-center text-md-left text-md-left">
                                            <button onClick={() => add(product)} className="btn btn-blue btn-block">
                                                <i className="fas fa-cart-plus mr-2" aria-hidden="true"></i> Lägg till
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </section>

            </div>
        </div >
    )
}

export default ProductDetails
