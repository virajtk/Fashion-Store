import React, { Component } from "react";

class AddAccount extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: "",
      userName: "",
      email: "",
      contactNo: "",
      password: "",
      confirmPassword: "",
    };
  }

  onSubmitHandler = () => {
    alert(JSON.stringify(this.state));
  };

  onChangeHandler = (e) => {
    const { name, value } = e.target;

    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <div>
        {/*[if lt IE 8]>
                <p class="browserupgrade">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
                <![endif]*/}
        {/* preloader area start */}
        <div id="preloader">
          <div className="loader" />
        </div>
        {/* preloader area end */}

        {/* Add Account area start */}
        <div className="login-area register-bg">
          <div className="container-fluid p-0">
            <div className="row no-gutters">
              <div className="col-xl-4 offset-xl-8 col-lg-6 offset-lg-6">
                <div className="login-box-s2 ptb--100">
                  <form onSubmit={this.onSubmitHandler}>
                    <div className="login-form-head">
                      <h4>Add Store Manager</h4>
                      <p>
                        Add Store Manager to Give Access for Manage <br /> The
                        Fashion Store
                      </p>
                    </div>
                    <div className="login-form-body">
                      <div className="form-gp">
                        <label htmlFor="exampleInputName1">Full Name</label>
                        <input
                          type="text"
                          id="inputFullName"
                          name="fullName"
                          value={this.state.fullName}
                          onChange={this.onChangeHandler}
                        />
                        <i className="ti-user" />
                        <div className="text-danger" />
                      </div>
                      <div className="form-gp">
                        <label htmlFor="exampleInputUsername1">Username</label>
                        <input
                          type="text"
                          id="inputUsername"
                          name="userName"
                          value={this.state.userName}
                          onChange={this.onChangeHandler}
                        />
                        <i className="ti-id-badge" />
                        <div className="text-danger" />
                      </div>
                      <div className="form-gp">
                        <label htmlFor="exampleInputEmail1">
                          Email address
                        </label>
                        <input
                          type="email"
                          id="inputEmail"
                          name="email"
                          value={this.state.email}
                          onChange={this.onChangeHandler}
                        />
                        <i className="ti-email" />
                        <div className="text-danger" />
                      </div>
                      <div className="form-gp">
                        <label htmlFor="exampleInputContactNo1">
                          Contact Number
                        </label>
                        <input
                          type="number"
                          id="inputContactNo"
                          name="contactNo"
                          value={this.state.contactNo}
                          onChange={this.onChangeHandler}
                        />
                        <i className="ti-mobile" />
                        <div className="text-danger" />
                      </div>
                      <div className="form-gp">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input
                          type="password"
                          id="inputPassword"
                          name="password"
                          value={this.state.password}
                          onChange={this.onChangeHandler}
                        />
                        <i className="ti-lock" />
                        <div className="text-danger" />
                      </div>
                      <div className="form-gp">
                        <label htmlFor="exampleInputPassword2">
                          Confirm Password
                        </label>
                        <input
                          type="password"
                          id="inputConfirmPassword"
                          name="confirmPassword"
                          value={this.state.confirmPassword}
                          onChange={this.onChangeHandler}
                        />
                        <i className="ti-lock" />
                        <div className="text-danger" />
                      </div>
                      <div className="submit-btn-area">
                        <button id="form_submit" type="submit">
                          Submit <i className="ti-arrow-right" />
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Add Account area end */}
      </div>
    );
  }
}

export default AddAccount;
