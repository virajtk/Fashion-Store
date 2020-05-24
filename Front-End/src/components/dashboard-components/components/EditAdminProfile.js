import React, { Component } from "react";
import AdminUserList from "../../admin-components/AdminUserList";
import { Redirect } from "react-router-dom";

class EditAdminProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      adminUser: [],
      fullName: "",
      userName: "",
      email: "",
      contactNo: "",
      password: "",
      newPassword: "",
      redirect: null,
    };
  }

  onSubmitHandler = (e) => {
    e.preventDefault();
    // alert(JSON.stringify(this.state));
    this.postData();
  };

  async postData() {
    try {
      let result = await fetch(
        "http://localhost:3000/adminUser/" + this.state.adminUser._id,
        {
          method: "patch",
          headers: {
            Accept: "application/json",
            "Content-type": "application/json",
          },
          body: JSON.stringify(this.state),
        }
      );

      console.log("Result: " + result);
      // this.setState({ redirect: "/adminlist" });
    } catch (error) {
      console.log(error.message);
    }
  }

  onChangeHandler = (e) => {
    const { name, value } = e.target;

    this.setState({
      [name]: value,
    });
  };

  componentDidMount(){
    let active_user_id = sessionStorage.getItem("activeUserID:");
    fetch("http://localhost:3000/adminUser/" + active_user_id)
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          adminUser: json,
          fullName: json.fullName,
          userName: json.userName,
          email: json.email,
          contactNo: json.contactNo,
          password: json.password,
        });
      });
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to={this.state.redirect} />;
    }
    return (
      <div>
        <div className="row">
          <div className="col-lg-12 mt-5">
            <div className="card">
              <div className="card-body">
                <div>
                  <h4 className="header-title">Edit Profile</h4>
                </div>
                <form onSubmit={this.onSubmitHandler} autoComplete="off">
                  <div className="row">
                    <div className="col-md-8">
                      <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Full Name</label>
                        <input
                          type="text"
                          className="form-control style-input"
                          placeholder="Full Name"
                          id="inputFullName"
                          name="fullName"
                          value={this.state.fullName}
                          onChange={this.onChangeHandler}
                          required
                        />
                      </div>

                      <div className="form-group">
                        <label htmlFor="exampleInputEmail1">User Name</label>
                        <input
                          type="text"
                          className="form-control style-input"
                          placeholder="User Name"
                          id="inputUserName"
                          name="userName"
                          value={this.state.userName}
                          onChange={this.onChangeHandler}
                          required
                          readOnly
                        />
                      </div>

                      <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email</label>
                        <input
                          type="email"
                          className="form-control style-input"
                          placeholder="Email"
                          id="inputEmail"
                          name="email"
                          value={this.state.email}
                          onChange={this.onChangeHandler}
                          required
                        />
                      </div>

                      <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Contact Number</label>
                        <input
                          type="number"
                          className="form-control style-input"
                          placeholder="Contact Number"
                          id="inputContactNo"
                          name="password"
                          value={this.state.password}
                          onChange={this.onChangeHandler}
                          required
                        />
                      </div>

                      <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Current Password</label>
                        <input
                          type="password"
                          className="form-control style-input"
                          placeholder="Current Password"
                          id="inputCurrentPassword"
                          name="password"
                          value={this.state.password}
                          onChange={this.onChangeHandler}
                          required
                          readOnly
                        />
                      </div>

                      <div className="form-group">
                        <label htmlFor="exampleInputEmail1">New Password</label>
                        <input
                          type="password"
                          className="form-control style-input"
                          placeholder="New Password"
                          id="inputNewPassword"
                          name="newPassword"
                          value={this.state.newPassword}
                          onChange={this.onChangeHandler}
                        />
                        <small id="emailHelp" className="form-text text-muted">
                          Enter New Password if you want to Update the Password.
                        </small>
                      </div>

                      <div className="form-check text-left">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="exampleCheck1"
                          required
                        />
                        <label className="form-check-label" htmlFor="exampleCheck1">
                          Confirmation
                        </label>
                      </div>
                      <div className="fashion-buttons text-left">
                        <button type="submit" className="btn fashion-btn ">
                          Update Profile
                        </button>
                      </div>
                    </div>
                    <div className="col-md-6"> </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default EditAdminProfile;
