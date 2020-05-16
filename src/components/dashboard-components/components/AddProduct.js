import React, {Component} from 'react';
import Product from "../../img/product/8.jpg";

class AddProduct extends Component {

    state = {
        mainCategory: '',
        productType: '',
        productName: '',
        description: '',
        price: '',
        brand: '',
        colour: '',
        status: ''
    };

    handleChange = (event) => {

    };


    render() {
        return (
            <div>
                <div>
                    <h4 className="header-title">Add New Product</h4>
                </div>
                <form>
                    <div className="row">
                        <div className="col-md-8">
                            <div className="form-group">
                                <label className="col-form-label">Main Category</label>
                                <select className="custom-select style-input select-style">
                                    <option selected="selected"> </option>
                                    <option value="Woman wear">Woman wear</option>
                                    <option value="Men wear">Men wear</option>
                                    <option value="Children">Children</option>
                                    <option value="Bags and Purses">Bags and Purses</option>
                                    <option value="Footwear">Footwear</option>
                                    <option value="Jewellery">Jewellery</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label className="col-form-label">Product Type</label>
                                <select className="custom-select style-input select-style">
                                    <option selected="selected"> </option>
                                    <option value="Woman wear">Woman wear</option>
                                    <option value="Men wear">Men wear</option>
                                    <option value="Children">Children</option>
                                    <option value="Bags and Purses">Bags and Purses</option>
                                    <option value="Footwear">Footwear</option>
                                    <option value="Jewellery">Jewellery</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Product Name</label>
                                <input
                                       type="text"
                                       className="form-control style-input"
                                       placeholder="Sub Category"
                                       name="productName"
                                       value={this.state.productName}
                                       onChange={this.handleChange}
                                />
                                <small id="emailHelp" className="form-text text-muted">This category should be related to the main category.</small>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleFormControlTextarea1">Description</label>
                                <textarea
                                    className="form-control style-input"
                                    id="exampleFormControlTextarea1"
                                    rows="3"
                                    name="description"
                                    value={this.state.description}
                                    onChange={this.handleChange}
                                ></textarea>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Price</label>
                                <input
                                    type="text"
                                    className="form-control style-input"
                                    placeholder="Price"
                                    name="price"
                                    value={this.state.price}
                                    onChange={this.handleChange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Brand</label>
                                <input
                                    type="text"
                                    className="form-control style-input"
                                    placeholder="Brand"
                                    name="brand"
                                    value={this.state.brand}
                                    onChange={this.handleChange}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Colour</label>
                                <input
                                    type="text"
                                    className="form-control style-input"
                                    placeholder="Colour"
                                    name="colour"
                                    value={this.state.colour}
                                    onChange={this.handleChange}
                                />
                            </div>
                            <div className="form-check text-left">
                                <input
                                    type="checkbox"
                                    className="form-check-input"
                                    id="exampleCheck1"
                                    name="status"
                                    value={this.state.status}
                                    onClick={2}
                                />
                                <label className="form-check-label" htmlFor="exampleCheck1">Approved</label>
                            </div>
                            <div className="fashion-buttons text-left">
                                <button type="submit" className="btn fashion-btn ">Submit</button>
                                <button type="reset" className="btn fashion-btn">Reset</button>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="col-lg-12 col-sm-6">
                            <div className="product-item">
                                <div className="pi-pic">
                                    <img src={Product} alt="product" />
                                </div>
                                <div className="pi-text fashion-buttons upload-btn">
                                    <button type="submit" className="btn fashion-btn ">Upload</button>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default AddProduct;