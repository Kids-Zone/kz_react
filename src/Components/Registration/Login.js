import React, { Component } from "react";
import "./Register.css";

export default class Login extends Component {
    render() {
        return (
            <form className="container-fluid">

                <h3>Log in</h3>
                <br></br>
                <div className="row form-group">
                    <label className="col label">Email</label>
                    <input type="email" className="col form-control" placeholder="Enter email" />
                </div>

                <div className="row form-group">
                    <label className="col label">Password</label>
                    <input type="password" className="col form-control" placeholder="Enter password" />
                </div>

                <div className="row form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="label custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                <button type="submit" className="button btn btn-info">Sign in</button>
                <p className="forgot-password text-center">
                    Forgot <a href="#">password?</a>
                </p>
            </form>
        );
    }
}