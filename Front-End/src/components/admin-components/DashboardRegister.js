import React, {Component} from 'react';

class DashboardRegister extends Component {
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
                {/* login area start */}
                <div className="login-area">
                    <div className="container">
                        <div className="login-box ptb--100">
                            <form>
                                <div className="login-form-head">
                                    <h4>Sign Up</h4>
                                    <p>Hello there, Sign up and Join with Us</p>
                                </div>
                                <div className="login-form-body">
                                    <div className="form-gp">
                                        <label htmlFor="exampleInputName1">Full Name</label>
                                        <input type="text" id="exampleInputName1" />
                                        <i className="ti-user" />
                                        <div className="text-danger" />
                                    </div>
                                    <div className="form-gp">
                                        <label htmlFor="exampleInputUsername1">Username</label>
                                        <input type="text" id="exampleInputUsername1" />
                                        <i className="ti-id-badge" />
                                        <div className="text-danger" />
                                    </div>
                                    <div className="form-gp">
                                        <label htmlFor="exampleInputEmail1">Email address</label>
                                        <input type="email" id="exampleInputEmail1" />
                                        <i className="ti-email" />
                                        <div className="text-danger" />
                                    </div>
                                    <div className="form-gp">
                                        <label htmlFor="exampleInputRole1">Role</label>
                                        <i className="ti-face-smile" />
                                        <div className="text-danger" />
                                    </div>
                                    <label className="form-gp"> </label>
                                    <div className="form-gp">
                                        <select className="custom-select style-input select-style">
                                            <option selected="selected"> </option>
                                            <option value="Admin">As Admin</option>
                                            <option value="Manager">As Manager</option>
                                        </select>
                                        <div className="text-danger" />
                                    </div>
                                    <div className="form-gp">
                                        <label htmlFor="exampleInputContactNo1">Contact No</label>
                                        <input type="text" id="exampleInputContactNo1" />
                                        <i className="ti-mobile" />
                                        <div className="text-danger" />
                                    </div>
                                    <div className="form-gp">
                                        <label htmlFor="exampleInputPassword1">Password</label>
                                        <input type="password" id="exampleInputPassword1" />
                                        <i className="ti-lock" />
                                        <div className="text-danger" />
                                    </div>
                                    <div className="form-gp">
                                        <label htmlFor="exampleInputPassword2">Confirm Password</label>
                                        <input type="password" id="exampleInputPassword2" />
                                        <i className="ti-lock" />
                                        <div className="text-danger" />
                                    </div>
                                    <div className="submit-btn-area">
                                        <button id="form_submit" type="submit">Submit <i className="ti-arrow-right" /></button>
                                    </div>
                                    <div className="form-footer text-center mt-5">
                                        <p className="text-muted">Don't have an account? <a href="">Sign in</a></p>
                                    </div>
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

export default DashboardRegister;