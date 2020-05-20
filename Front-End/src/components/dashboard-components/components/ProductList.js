import React, {Component} from 'react';
import Product from "../../img/product/8.jpg";

class ProductList extends Component {
    render() {
        return (
            <div>
                <h4 className="header-title">Product List</h4>
                <div className="single-table">
                    <div className="table-responsive">
                        <table className="table table-hover text-center">
                            <thead className="text-uppercase bg-theme">
                            <tr className="text-white">
                                <th scope="col">ID</th>
                                <th scope="col">Main Category</th>
                                <th scope="col">Product Type</th>
                                <th scope="col">Product Name</th>
                                <th scope="col">Description</th>
                                <th scope="col">Price</th>
                                <th scope="col">Brand</th>
                                <th scope="col">Colour</th>
                                <th scope="col">Status</th>
                                <th scope="col">Preview</th>
                                <th scope="col">Action</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Women</td>
                                <td>Frock</td>
                                <td>Blue Frock</td>
                                <td>Pretty</td>
                                <td>Rs.2000.0</td>
                                <td>No limit</td>
                                <td>Blue</td>
                                <td>Approved</td>
                                <td>
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="col-lg-3"> </div>
                                            <div className="col-lg-6 product-preview">
                                                <img src={Product} alt="product" />
                                            </div>
                                            <div className="col-lg-3"> </div>
                                        </div>
                                    </div>
                                </td>
                                <td><i className="ti-trash" /></td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProductList;