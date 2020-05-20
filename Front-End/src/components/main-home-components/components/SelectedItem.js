import React, {Component} from 'react';
import Product from "../../img/single-product/1.jpg";
import Product1 from "../../img/single-product/thumb-1.jpg";
import Product2 from "../../img/single-product/thumb-2.jpg";
import Product3 from "../../img/single-product/thumb-3.jpg";
import Product4 from "../../img/single-product/thumb-4.jpg";

class SelectedItem extends Component {
    render() {
        return (
                <section className="product-section">
                    <div className="container" >
                        <div className="row">
                            <div className="col-lg-4">
                                <div className="product-pic-zoom">
                                    <img className="product-big-img" src={Product} alt="" />
                                </div>
                            </div>
                            <div className="col-lg-8 product-details">
                                <h2 className="p-title">White peplum top</h2>
                                <h3 className="p-price">$39.90</h3>
                                <h4 className="p-stock">Available: <span>In Stock</span></h4>
                                <div className="p-rating">
                                    <i className="fa fa-star-o" />
                                    <i className="fa fa-star-o" />
                                    <i className="fa fa-star-o" />
                                    <i className="fa fa-star-o" />
                                    <i className="fa fa-star-o fa-fade" />
                                </div>
                                <div className="p-review">
                                    <a href>3 reviews</a>|<a href>Add your review</a>
                                </div>
                                <div className="fw-size-choose">
                                    <p>Size</p>
                                    <div className="sc-item">
                                        <input type="radio" name="sc" id="xs-size" />
                                        <label htmlFor="xs-size">32</label>
                                    </div>
                                    <div className="sc-item">
                                        <input type="radio" name="sc" id="s-size" />
                                        <label htmlFor="s-size">34</label>
                                    </div>
                                    <div className="sc-item">
                                        <input type="radio" name="sc" id="m-size" defaultChecked />
                                        <label htmlFor="m-size">36</label>
                                    </div>
                                    <div className="sc-item">
                                        <input type="radio" name="sc" id="l-size" />
                                        <label htmlFor="l-size">38</label>
                                    </div>
                                    <div className="sc-item disable">
                                        <input type="radio" name="sc" id="xl-size" disabled />
                                        <label htmlFor="xl-size">40</label>
                                    </div>
                                    <div className="sc-item">
                                        <input type="radio" name="sc" id="xxl-size" />
                                        <label htmlFor="xxl-size">42</label>
                                    </div>
                                </div>
                                <div className="quantity">
                                    <p>Quantity</p>
                                    <div className="pro-qty"><input type="text" defaultValue={1} /></div>
                                </div>
                                <a href="#" className="site-btn">SHOP NOW</a>
                                <div id="accordion" className="accordion-area">
                                    <div className="panel">
                                        <div className="panel-header" id="headingOne">
                                            <button className="panel-link active" data-toggle="collapse" data-target="#collapse1" aria-expanded="true" aria-controls="collapse1">information</button>
                                        </div>
                                        <div id="collapse1" className="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                                            <div className="panel-body">
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin pharetra tempor so dales. Phasellus sagittis auctor gravida. Integer bibendum sodales arcu id te mpus. Ut consectetur lacus leo, non scelerisque nulla euismod nec.</p>
                                                <p>Approx length 66cm/26" (Based on a UK size 8 sample)</p>
                                                <p>Mixed fibres</p>
                                                <p>The Model wears a UK size 8/ EU size 36/ US size 4 and her height is 5'8"</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="panel">
                                        <div className="panel-header" id="headingTwo">
                                            <button className="panel-link" data-toggle="collapse" data-target="#collapse2" aria-expanded="false" aria-controls="collapse2">care details </button>
                                        </div>
                                        <div id="collapse2" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                                            <div className="panel-body">
                                                <img src="./img/cards.png" alt="" />
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin pharetra tempor so dales. Phasellus sagittis auctor gravida. Integer bibendum sodales arcu id te mpus. Ut consectetur lacus leo, non scelerisque nulla euismod nec.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="panel">
                                        <div className="panel-header" id="headingThree">
                                            <button className="panel-link" data-toggle="collapse" data-target="#collapse3" aria-expanded="false" aria-controls="collapse3">shipping &amp; Returns</button>
                                        </div>
                                        <div id="collapse3" className="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                                            <div className="panel-body">
                                                <h4>7 Days Returns</h4>
                                                <p>Cash on Delivery Available<br />Home Delivery <span>3 - 4 days</span></p>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin pharetra tempor so dales. Phasellus sagittis auctor gravida. Integer bibendum sodales arcu id te mpus. Ut consectetur lacus leo, non scelerisque nulla euismod nec.</p>
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

export default SelectedItem;