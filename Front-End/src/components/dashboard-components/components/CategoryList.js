import React, { Component } from "react";

class CategoryList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      isLoaded: false,
    };
  }

  editAction(category) {
    alert("Edit = " + category._id);
  }

  deleteAction(category) {

    const API_URL = 'http://localhost:3000/category/'+ category._id ;
    
    try {
        let result = fetch(API_URL, {method: "delete"});
  
        console.log("Result: " + result);
      } catch (error) {
        console.log(error.message);
      }
  }

  componentDidMount() {
    fetch("http://localhost:3000/category")
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          isLoaded: true,
          categories: json,
        });
      });
  }

  render() {
    let { isLoaded, categories } = this.state;
    if (!isLoaded) {
      return (
        <div>
          <h4 className="header-title">Manage Categories</h4>
          Loading...
        </div>
      );
    } else {
      return (
        <div>
          <h4 className="header-title">Manage Categories</h4>
          <div className="single-table">
            <div className="table-responsive">
              <table className="table table-hover text-center">
                <thead className="text-uppercase bg-theme">
                  <tr className="text-white">
                    <th scope="col">Index</th>
                    <th scope="col">Main Category</th>
                    <th scope="col">Sub Category</th>
                    <th scope="col">Description</th>
                    <th scope="col">Edit</th>
                    <th scope="col">Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {categories.map((category) => (
                    <tr key={category._id}>
                      <th scope="row">{categories.indexOf(category) + 1}</th>
                      <td>{category.mainCategory}</td>
                      <td>{category.subCategory}</td>
                      <td>{category.description}</td>
                      <td>
                        <button
                          style={{
                            padding: 0,
                            border: "none",
                            background: "none",
                          }}
                          onClick={() => this.editAction(category)}
                        >
                          <i className="ti-pencil" />
                        </button>
                      </td>
                      <td>
                        <button
                          style={{
                            padding: 0,
                            border: "none",
                            background: "none",
                          }}
                          onClick={() => this.deleteAction(category)}
                        >
                          <i className="ti-trash" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default CategoryList;
