import React, {Component} from 'react';
import Product from "../../img/single-product/1.jpg";

class SelectedItem extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedProduct: [],
            isLoaded: false,
        }

    }

    showNowAction = (id) => {
        // window.sessionStorage.setItem("selectedProduct:",id);
    }

    componentDidMount() {
        let id=  sessionStorage.getItem("productID:");
        fetch('http://localhost:3000/product/'+id)
            .then(res => res.json())
            .then(json =>{
                console.log("json",json);
                this.setState({
                    selectedProduct: json,
                    isLoaded: true
                })
            });
    }

    render() {
        let { isLoaded, selectedProduct } = this.state;
        if(!isLoaded){
            return (
                <div id="preloader">
                    <div className="loader" />
                </div>
            );
        }else {
            return (
                <section className="product-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4">
                                <div className="product-pic-zoom">
                                    <img className="product-big-img" src={Product} alt=""/>
                                </div>
                            </div>
                            <div className="col-lg-8 product-details" key={selectedProduct._id}>
                                <h2 className="p-title">{selectedProduct.productName}</h2>
                                <h3 className="p-price">LKR.{selectedProduct.discountPrice}</h3>
                                <h4 className="p-stock">Available: <span>In Stock</span></h4>
                                <div className="p-rating">
                                    <i className="fa fa-star-o"/>
                                    <i className="fa fa-star-o"/>
                                    <i className="fa fa-star-o"/>
                                    <i className="fa fa-star-o"/>
                                    <i className="fa fa-star-o fa-fade"/>
                                </div>
                                <div className="p-review">
                                    <a href>3 reviews</a>|<a href>Add your review</a>
                                </div>
                                <div className="fw-size-choose">
                                    <p>Size</p>
                                    <div className="sc-item">
                                        <input type="radio" name="sc" id="xs-size"/>
                                        <label htmlFor="xs-size">32</label>
                                    </div>
                                    <div className="sc-item">
                                        <input type="radio" name="sc" id="s-size"/>
                                        <label htmlFor="s-size">34</label>
                                    </div>
                                    <div className="sc-item">
                                        <input type="radio" name="sc" id="m-size" defaultChecked/>
                                        <label htmlFor="m-size">36</label>
                                    </div>
                                    <div className="sc-item">
                                        <input type="radio" name="sc" id="l-size"/>
                                        <label htmlFor="l-size">38</label>
                                    </div>
                                    <div className="sc-item disable">
                                        <input type="radio" name="sc" id="xl-size" disabled/>
                                        <label htmlFor="xl-size">40</label>
                                    </div>
                                    <div className="sc-item">
                                        <input type="radio" name="sc" id="xxl-size"/>
                                        <label htmlFor="xxl-size">42</label>
                                    </div>
                                </div>
                                <div className="quantity">
                                    <p>Quantity</p>
                                    <div className="pro-qty"><input type="text" defaultValue={1}/></div>
                                </div>
                                <a href="/checkout" className="site-btn" onClick={this.showNowAction.bind(this,selectedProduct._id)}>SHOP NOW</a>
                                <div id="accordion" className="accordion-area">
                                    <div className="panel">
                                        <div className="panel-header" id="headingOne">
                                            <button className="panel-link active" data-toggle="collapse"
                                                    data-target="#collapse1" aria-expanded="true"
                                                    aria-controls="collapse1">Description
                                            </button>
                                        </div>
                                        <div id="collapse1" className="collapse show" aria-labelledby="headingOne"
                                             data-parent="#accordion">
                                            <div className="panel-body">
                                                <p>{selectedProduct.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="panel">
                                        <div className="panel-header" id="headingTwo">
                                            <button className="panel-link" data-toggle="collapse"
                                                    data-target="#collapse2" aria-expanded="false"
                                                    aria-controls="collapse2">Card Details
                                            </button>
                                        </div>
                                        <div id="collapse2" className="collapse" aria-labelledby="headingTwo"
                                             data-parent="#accordion">
                                            <div className="panel-body">
                                                <img src="./img/cards.png" alt=""/>
                                                <p></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="panel">
                                        <div className="panel-header" id="headingThree">
                                            <button className="panel-link" data-toggle="collapse"
                                                    data-target="#collapse3" aria-expanded="false"
                                                    aria-controls="collapse3">Shipping &amp; Returns
                                            </button>
                                        </div>
                                        <div id="collapse3" className="collapse" aria-labelledby="headingThree"
                                             data-parent="#accordion">
                                            <div className="panel-body">
                                                <h4>7 Days Returns</h4>
                                                <p>Cash on Delivery Available<br/>Home Delivery <span>3 - 4 days</span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            );
        }
    }
}

export default SelectedItem;
