import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class EditUserProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: [],
            name: "",
            email: "",
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
    deleteAction = (user_id) => {
        const API_URL = "http://localhost:3000/user" + user_id;

    }


    async postData() {
        try {
            let id = sessionStorage.getItem("selectedUserID:");
            let result;
            if(this.state.newPassword){
                result = await fetch("http://localhost:3000/user/" + id,{
                    method: "put",
                    headers: {
                        "Accept": "application/json",
                        "Content-type": "application/json",
                    },
                    body: JSON.stringify({
                        "name": this.state.name,
                        "email": this.state.email,
                        "password": this.state.password,
                        "newPassword": this.state.newPassword,
                    }),
                });
            }
            else{
                result = await fetch("http://localhost:3000/user/" + id,{
                    method: "put",
                    headers: {
                        "Accept": "application/json",
                        "Content-type": "application/json",
                    },
                    body: JSON.stringify({
                        "fullName": this.state.fullName,
                        "email": this.state.email,
                        "contactNo": this.state.contactNo,
                    }),
                });
            }

            console.log("Result: " + result);
            toast.success("✔️ Your Profile Updated Susseccfully !", {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });

            setTimeout(function() { //Start the timer
                this.setState({redirect: "/"}) //After 3 second, set redirect to true
            }.bind(this), 3000)
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



    render() {
        if (this.state.redirect) {
            return <Redirect to={this.state.redirect} />;
        }
        return (
            <div>
                <ToastContainer/>
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
                                                <label htmlFor="exampleInputEmail1">Name</label>
                                                <input
                                                    type="text"
                                                    className="form-control style-input"
                                                    placeholder="name"
                                                    id="inputName"
                                                    name="name"
                                                    value={this.state.name}
                                                    onChange={this.onChangeHandler}
                                                    required
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="exampleInputEmail1">Email</label>
                                                <input
                                                    type="email"
                                                    className="form-control style-input"
                                                    placeholder="Email"
                                                    id="email"
                                                    name="email"
                                                    value={this.state.email}
                                                    onChange={this.onChangeHandler}
                                                    required
                                                    readOnly
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="exampleInputEmail1">Password</label>
                                                <input
                                                    type="password"
                                                    className="form-control style-input"
                                                    placeholder="Password"
                                                    id="inputPassword"
                                                    name="password"
                                                    value={this.state.password}
                                                    onChange={this.onChangeHandler}
                                                    required
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="exampleInputEmail1">New Password</label>
                                                <input
                                                    type="password"
                                                    className="form-control style-input"
                                                    placeholder="NewPassword"
                                                    id="inputnewPassword"
                                                    name="newPassword"
                                                    value={this.state.newPassword}
                                                    onChange={this.onChangeHandler}
                                                    required
                                                />
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
                                                <button type="submit" className="btn fashion-btn " onClick={() => this.deleteAction(this.user)}>
                                                    Delete  Profile


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

export default EditUserProfile;
