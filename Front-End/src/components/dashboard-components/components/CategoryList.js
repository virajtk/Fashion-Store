import React, {Component} from 'react';

class CategoryList extends Component {
    render() {
        return (
            <div>
                <h4 className="header-title">Category List</h4>
                <div className="single-table">
                    <div className="table-responsive">
                        <table className="table table-hover text-center">
                            <thead className="text-uppercase bg-theme">
                            <tr className="text-white">
                                <th scope="col">ID</th>
                                <th scope="col">Main Category</th>
                                <th scope="col">Sub Category</th>
                                <th scope="col">Description</th>
                                <th scope="col">Action</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Mark</td>
                                <td>09 / 07 / 2018</td>
                                <td>$120</td>
                                <td><i className="ti-trash" /></td>
                            </tr>
                            <tr>
                                <th scope="row">1</th>
                                <td>jone</td>
                                <td>09 / 07 / 2018</td>
                                <td>$150</td>
                                <td><i className="ti-trash" /></td>
                            </tr>
                            <tr>
                                <th scope="row">1</th>
                                <td>Mark</td>
                                <td>09 / 07 / 2018</td>
                                <td>$120</td>
                                <td><i className="ti-trash" /></td>
                            </tr>
                            <tr>
                                <th scope="row">1</th>
                                <td>jone</td>
                                <td>09 / 07 / 2018</td>
                                <td>$150</td>
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

export default CategoryList;