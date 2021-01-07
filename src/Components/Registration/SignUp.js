import React, { Component } from "react";
import "./Register.css";

export default class SignUp extends Component {
    render() {
        return (
            <form className="container-fluid"> 
                <h3>Register</h3>
                <br></br>
                <div className="row form-group">
                    <label className="col label">First name</label>
                    <input type="text" className="col form-control" placeholder="Enter first name" />
                </div>

                <div className="row form-group">
                    <label className="col label">Last name</label>
                    <input type="text" className="col form-control" placeholder="Enter Last name" />
                </div>

                <div className="row form-group">
                    <label className="col label">Date of Birth</label>
                    <input type="text" className="col form-control" placeholder="Enter date of birth" />
                </div>

                <div className="row form-group">
                    <label className="col label" >Email</label>
                    <input type="email" className="col form-control" placeholder="example@example.com" />
                </div>

                <div className="row form-group">
                    <label className="col label" >Phone Number</label>
                    <input type="email" className="col form-control" placeholder="Enter phone number" />
                </div>

                <div className="row form-group">
                    <label className="col label">Password</label>
                    <input type="password" className="col form-control" placeholder="Enter password" />
                </div>

                <button type="submit" className="button btn btn-info">Register</button>
                <p className="forgot-password text-center">
                    Already registered <a href="#">log in?</a>
                </p>
            </form>
        );
    }
}