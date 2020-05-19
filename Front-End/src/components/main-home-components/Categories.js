import React, {Component} from 'react';
import Product from '../img/product/8.jpg';


class Categories extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-lg-4 mt-5">
                    <div className="card">
                        <div className="card-body">
                            <h4 className="header-title">Products List</h4>

                        </div>
                    </div>
                </div>


                <div className="col-lg-8 mt-5">
                    <div className="card">
                        <div className="card-body">
                            <div className="row">

                                <div className="col-lg-4 col-sm-6">
                                    <div className="product-item">
                                        <div className="pi-pic">
                                            <img src={Product} alt="product" />
                                            <div className="pi-links">
                                                <a href="#" className="add-card"><i className="ti-bag"/><span>ADD TO CART</span></a>
                                                <a href="#" className="wishlist-btn"><i className="ti-heart"/></a>
                                            </div>
                                        </div>
                                        <div className="pi-text">
                                            <h6>$35,00</h6>
                                            <p>Flamboyant Pink Top </p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Categories;