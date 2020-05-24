import React, { Component } from "react";
import { Redirect } from "react-router-dom";

class DashboardLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: null,
      password: null,
      login: false,
      store: null,
    };
  }

  login = () => {
    let LOGIN_API = "";
    fetch(LOGIN_API, {
      method: "POST",
      body: JSON.stringify(this.state),
    }).then((response) => {
      response.json().then((result) => {
        console.log("result", result);
        localStorage.setItem(
          "login",
          JSON.stringify({
            login: true,
            store: result.token,
            userid: result._id,
            userrole: result.role,
          })
        );
        this.storeCollector();
      });
    });
  };

  componentDidMount() {
    this.storeCollector();
  }

  storeCollector() {
    let store = JSON.parse(localStorage.getItem("login"));
    if (store && store.login) {
      this.setState({
        login: true,
        store: store,
      });
    }
  }

  post(){
    let token = "Bearer "+ this.state.store.token;
    let LOGIN_API = "";
    fetch(LOGIN_API, {
      method: "POST",
      headers: {
        'Authorization': token
      },
      body: JSON.stringify(this.state),
    }).then((response) => {
      response.json().then((result) => {
        console.log("result", result);
      });
    });
  }

  render() {
    if (this.state.login) {
      return <Redirect to="/" />;
    }
    return (
      <div>
        {/*[if lt IE 8]>
            <p class="browserupgrade">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
        <![endif]*/}
        {/* preloader area start */}
        {/* <div id="preloader">
          <div className="loader" />
        </div> */}
        {/* preloader area end */}
        {/* login area start */}
        <div className="login-area">
          <div className="container">
            <div className="login-box ptb--100">
              <form
                autoComplete="off"
                onSubmit={() => {
                  this.login();
                }}
              >
                <div className="login-form-head">
                  <h4>Sign In</h4>
                  <p>Hello there, Sign in and start managing Admin Panel</p>
                </div>
                <div className="login-form-body">
                  <div className="form-gp">
                    <label htmlFor="exampleInputEmail1">Username</label>
                    <input
                      type="Username"
                      id="exampleInputEmail1"
                      onChange={(event) => {
                        this.setState({ username: event.target.value });
                      }}
                      value={this.state.username}
                      required
                    />
                    <i className="ti-email" />
                    <div className="text-danger" />
                  </div>
                  <div className="form-gp">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input
                      type="password"
                      id="exampleInputPassword1"
                      onChange={(event) => {
                        this.setState({ password: event.target.value });
                      }}
                      value={this.state.username}
                      required
                    />
                    <i className="ti-lock" />
                    <div className="text-danger" />
                  </div>
                  <div className="row mb-4 rmber-area">
                    <div className="col-6">
                      <div className="custom-control custom-checkbox mr-sm-2">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          id="customControlAutosizing"
                        />
                        <label
                          className="custom-control-label"
                          htmlFor="customControlAutosizing"
                        >
                          Remember Me
                        </label>
                      </div>
                    </div>
                    <div className="col-6 text-right">
                      <a href="#">Forgot Password?</a>
                    </div>
                  </div>
                  <div className="submit-btn-area">
                    <button id="form_submit" type="submit">
                      Submit <i className="ti-arrow-right" />
                    </button>
                  </div>
                  {/* <div className="form-footer text-center mt-5">
                                        <p className="text-muted">Don't have an account? <a href="register.html">Sign up</a></p>
                                    </div> */}
                </div>
              </form>
            </div>
          </div>
        </div>
        {/* login area end */}
      </div>
    );
  }
}

export default DashboardLogin;
