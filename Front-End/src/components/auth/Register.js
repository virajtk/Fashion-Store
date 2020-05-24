import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";

import classnames from "classnames";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "../../actions/authActions";
class Register extends Component {
    constructor() {
        super();
        this.state = {
            name: "",
            email: "",
            password: "",
            password2: "",
            errors: {}
        };
    }
    componentDidMount() {
        // If logged in and user navigates to Register page, should redirect them to dashboard
        if (this.props.auth.isAuthenticated) {
            this.props.history.push("/login");
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
            this.setState({
                errors: nextProps.errors
            });
        }
    }
    onChange = e => {
        this.setState({ [e.target.id]: e.target.value });
    };
    onSubmit = e => {
        e.preventDefault();
        const newUser = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            password2: this.state.password2
        };
        this.props.registerUser(newUser, this.props.history);

        alert("sucessful");

    };
    render() {
        const { errors } = this.state;
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
                <div className="login-area register-bg">
                    <div className="container-fluid p-0">
                        <div className="row no-gutters">
                            <div className="col-xl-4 offset-xl-8 col-lg-6 offset-lg-6">
                                <div className="login-box-s2 ptb--100">
                                    <form noValidate onSubmit={this.onSubmit}>

                                        <div className="login-form-head">
                                            <h4>Sign up</h4>
                                            <p>Hello there, Sign up and Join with Us</p>
                                        </div>
                                        <div className="login-form-body">
                                            <div className="form-gp">
                                                <label htmlFor="exampleInputName1">Name</label>
                                                <input
                                                    onChange={this.onChange}
                                                    value={this.state.name}
                                                    error={errors.name}
                                                    id="name"
                                                    type="text"
                                                    className={classnames("", {
                                                        invalid: errors.name
                                                    })}
                                                />
                                                <i className="ti-user" />
                                                <div className="text-danger" />
                                            </div>

                                            <div className="form-gp">
                                                <label htmlFor="exampleInputEmail1">Email address</label>
                                                <input
                                                    onChange={this.onChange}
                                                    value={this.state.email}
                                                    error={errors.email}
                                                    id="email"
                                                    type="email"
                                                    className={classnames("", {
                                                        invalid: errors.email
                                                    })}
                                                />
                                                <i className="ti-email" />
                                                <div className="text-danger" />
                                            </div>

                                            <label className="form-gp"> </label>



                                            <div className="form-gp">
                                                <label htmlFor="exampleInputPassword1">Password</label>
                                                <input
                                                    onChange={this.onChange}
                                                    value={this.state.password}
                                                    error={errors.password}
                                                    id="password"
                                                    type="password"
                                                    className={classnames("", {
                                                        invalid: errors.password
                                                    })}
                                                />
                                                <i className="ti-lock" />
                                                <div className="text-danger" />
                                            </div>
                                            <div className="form-gp">
                                                <label htmlFor="exampleInputPassword2">Confirm Password</label>
                                                <input
                                                    onChange={this.onChange}
                                                    value={this.state.password2}
                                                    error={errors.password2}
                                                    id="password2"
                                                    type="password"
                                                    className={classnames("", {
                                                        invalid: errors.password2
                                                    })}
                                                />
                                                <i className="ti-lock" />
                                                <div className="text-danger" />
                                            </div>
                                            <div className="submit-btn-area">
                                                <button id="form_submit" type="submit">Submit <i className="ti-arrow-right" /></button>
                                            </div>
                                            <div className="form-footer text-center mt-5">
                                                <p className="text-muted">Don't have an account? <Link to="/login">Sign in</Link></p>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* login area end */}
            </div>
        );
    }
}
Register.propTypes = {
    registerUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});
export default connect(
    mapStateToProps,
    { registerUser }
)(withRouter(Register));


