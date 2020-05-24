import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../actions/authActions";
import classnames from "classnames";


class Login extends Component {
    constructor() {
        super();
        this.state = {
            email: "",
            password: "",
            errors: {}
        };
    }

    componentDidMount() {
        // If logged in and user navigates to Login page, should redirect them to dashboard
        if (this.props.auth.isAuthenticated) {
            this.props.history.push("/register");
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.auth.isAuthenticated) {
            this.props.history.push("/register"); // push user to dashboard when they login
        }
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
        const userData = {
            email: this.state.email,
            password: this.state.password
        };
        this.props.loginUser(userData); // since we handle the redirect within our component, we don't need to pass in this.props.history as a parameter
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
                <div className="login-area login-bg">
                    <div className="container">
                        <div className="login-box ptb--100">
                            <form noValidate onSubmit={this.onSubmit}>
                                <div className="login-form-head">
                                    <h4>Sign In</h4>
                                    <p>Hello there, Sign in and start managing your Acount</p>
                                </div>
                                <div className="login-form-body">
                                    <div className="form-gp">
                                        <label htmlFor="exampleInputEmail1">Email address</label>
                                        <input
                                            onChange={this.onChange}
                                            value={this.state.email}
                                            error={errors.email}
                                            id="email"
                                            type="email"
                                            className={classnames("", {
                                                invalid: errors.email || errors.emailnotfound
                                            })}
                                        />
                                        <span >
                                            {errors.email}
                                            {errors.emailnotfound}
                                        </span>
                                        <i className="ti-email" />
                                        <div className="text-danger" />
                                    </div>
                                    <div className="form-gp">
                                        <label htmlFor="exampleInputPassword1">Password</label>
                                        <input
                                            onChange={this.onChange}
                                            value={this.state.password}
                                            error={errors.password}
                                            id="password"
                                            type="password"
                                            className={classnames("", {
                                                invalid: errors.password || errors.passwordincorrect
                                            })}
                                        />
                                        <span>
                                        {errors.password}
                                        {errors.passwordincorrect}
                                        </span>
                                        <i className="ti-lock" />
                                        <div className="text-danger" />
                                    </div>
                                    <div className="row mb-4 rmber-area">
                                        <div className="col-6">
                                            <div className="custom-control custom-checkbox mr-sm-2">
                                                <input type="checkbox" className="custom-control-input" id="customControlAutosizing" />
                                                <label className="custom-control-label" htmlFor="customControlAutosizing">Remember Me</label>
                                            </div>
                                        </div>
                                        <div className="col-6 text-right">
                                            <a href="#">Forgot Password?</a>
                                        </div>
                                    </div>
                                    <div className="submit-btn-area">
                                        <button id="form_submit" type="submit">Submit <i className="ti-arrow-right" /></button>
                                    </div>
                                    <div className="form-footer text-center mt-5">
                                        <p className="text-muted">Don't have an account? <Link to="/register">Register</Link></p>
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

Login.propTypes = {
    loginUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});
export default connect(
    mapStateToProps,
    { loginUser }
)(Login);

