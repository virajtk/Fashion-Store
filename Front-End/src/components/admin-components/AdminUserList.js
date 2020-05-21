import React, { Component } from "react";
import { Redirect } from "react-router-dom";

class AdminUserList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      adminUsers: [],
      isLoaded: false,
      redirect: null,
    };
  }

  editAction(adminUser) {
    alert("Edit = " + adminUser._id);
  }

  deleteAction(adminUser) {
    const API_URL = "http://localhost:3000/adminUser/" + adminUser._id;

    try {
      let result = fetch(API_URL, { method: "delete" });

      console.log("Result: " + result);
      // this.setState({ redirect: "/adminlist" });
    } catch (error) {
      console.log(error.message);
    }
  }

  componentDidMount() {
    fetch("http://localhost:3000/adminUser")
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          isLoaded: true,
          adminUsers: json,
        });
      });
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to={this.state.redirect} />;
    }
    let { isLoaded, adminUsers } = this.state;
    if (!isLoaded) {
      return (
        <div>
          <h4 className="header-title">Manage Administrator Users</h4>
          Loading...
        </div>
      );
    } else {
      return (
        <div>
          <h4 className="header-title">Manage Administrator Users</h4>
          <div className="single-table">
            <div className="table-responsive">
              <table className="table table-hover text-center">
                <thead className="text-uppercase bg-theme">
                  <tr className="text-white">
                    <th scope="col">Index</th>
                    <th scope="col">User Name</th>
                    <th scope="col">Full Name</th>
                    <th scope="col">Role</th>
                    <th scope="col">Email</th>
                    <th scope="col">Contact No.</th>
                    <th scope="col">Edit</th>
                    <th scope="col">Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {adminUsers.map((adminUser) => (
                    <tr key={adminUser._id}>
                      <th scope="row">{adminUsers.indexOf(adminUser) + 1}</th>
                      <td>{adminUser.userName}</td>
                      <td>{adminUser.fullName}</td>
                      <td>{adminUser.role}</td>
                      <td>{adminUser.email}</td>
                      <td>{adminUser.contactNo}</td>
                      <td>
                        <button
                          style={{
                            padding: 0,
                            border: "none",
                            background: "none",
                          }}
                          onClick={() => this.editAction(adminUser)}
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
                          onClick={() => this.deleteAction(adminUser)}
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

export default AdminUserList;