import React, { Component } from "react";
import "./Register.css";
import { Link } from "react-router-dom";

export default class MembershipValidation extends Component {
    render() {
        return (

            <div className="container-fluid" >
                 <div className="banner">
                <h3>Membership Rules</h3>
                </div>
                <div className="row">
                
            <p>1. Membership for mentors is available to anyone 18 years of age or older.<br></br>
               2. You promise NOT to use to conduct any fraudulent or business activity or have more than one Member Account at any time.</p>
            <p> <input type="checkbox"/>   I have read, understood, and accepted the rules for membership.</p>
            </div>

            <form className="container-fluid">
            <div className="banner">
                <h3>Upload Documents</h3>
            </div>
            <p>You need to upload proof of age and proof of address to continue.</p>
            <div className="row">
                <div className="col">
            <label className="col label file">Id Proof</label>
            </div>
            <div className="col filetext">
              <input type="text" />
      
              <input type="file" />
              </div>
              </div>
              <div className="row">
                <div className="col">
            <label className="col label file">Address Proof</label>
            </div>
            <div className="col filetext">
              <input type="text" />
      
              <input type="file" />
              </div>
              </div>
            </form>
            <div className="banner">
            <h3>Privacy Policy</h3>
            </div>
            <div className="row">
         
            <p>Please reach out and read our Privacy Policy in order to understand how your 
               information is used and shared, and check below if you accept the policy.</p>
             <p> <input type="checkbox"/>   I have read, understood, and accepted the PRIVACY POLICY for membership.</p>
             </div>
             <div className="row">
             <Link to={`/profile`}>
             <button className="button btn btn-info">Proceed</button>
             </Link>
             </div>
             <div className="row">
            <p>Once your documents are uploaded and validated, you will be redirected to your profile . 

            Thank you!</p>
            </div>
          </div>
            // <form className="container-fluid"> 
            //     <h3>Register</h3>
            //     <br></br>
            //     <div className="row form-group">
            //         <label className="col label">First name</label>
            //         <input type="text" className="col form-control" placeholder="Enter first name" />
            //     </div>

            //     <div className="row form-group">
            //         <label className="col label">Last name</label>
            //         <input type="text" className="col form-control" placeholder="Enter Last name" />
            //     </div>

            //     <div className="row form-group">
            //         <label className="col label">Date of Birth</label>
            //         <input type="text" className="col form-control" placeholder="Enter date of birth" />
            //     </div>

            //     <div className="row form-group">
            //         <label className="col label" >Email</label>
            //         <input type="email" className="col form-control" placeholder="example@example.com" />
            //     </div>

            //     <div className="row form-group">
            //         <label className="col label" >Phone Number</label>
            //         <input type="email" className="col form-control" placeholder="Enter phone number" />
            //     </div>

            //     <div className="row form-group">
            //         <label className="col label">Password</label>
            //         <input type="password" className="col form-control" placeholder="Enter password" />
            //     </div>

            //     <button type="submit" className="button btn btn-info">Register</button>
            //     <p className="forgot-password text-center">
            //         Already registered <a href="#">log in?</a>
            //     </p>
            // </form>
        );
    }
}