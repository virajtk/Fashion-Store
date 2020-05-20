import React, {Component} from 'react';
import Product from "../../img/product/8.jpg";

class Item extends Component {
    render() {
        const {price, productName, id} = this.props;
        return (
            <div className="col-lg-4 col-sm-6">
                    <div className="product-item">
                        <div className="pi-pic">
                            <img src={Product} alt="product" />
                            <div className="pi-links">
                                <a href="/selectedItem" className="add-card"><i className="ti-bag"/><span>ADD TO CART</span></a>
                                <a href="#" className="wishlist-btn"><i className="ti-heart"/></a>
                            </div>
                        </div>
                        <div className="pi-text">
                            <h6>{price}</h6>
                            <p>{productName}</p>
                        </div>
                    </div>
            </div>
        );
    }
}

export default Item;