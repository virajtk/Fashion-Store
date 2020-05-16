import React, {Component} from 'react';

class AddCategory extends Component {
    render() {
        return (
            <div>
                <div>
                <h4 className="header-title">Add New Category</h4>
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
                                <label htmlFor="exampleInputEmail1">Sub Category Name</label>
                                <input type="text" className="form-control style-input"  placeholder="Sub Category" />
                                <small id="emailHelp" className="form-text text-muted">This category should be related to the main category.</small>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleFormControlTextarea1">Description</label>
                                <textarea className="form-control style-input" id="exampleFormControlTextarea1" rows="3"></textarea>
                            </div>
                            <div className="form-check text-left">
                                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                <label className="form-check-label" htmlFor="exampleCheck1">Approved</label>
                            </div>
                            <div className="fashion-buttons text-left">
                                <button type="submit" className="btn fashion-btn ">Submit</button>
                                <button type="reset" className="btn fashion-btn">Reset</button>
                            </div>
                        </div>
                        <div className="col-md-6">

                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default AddCategory;