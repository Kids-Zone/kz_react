import React, { Component } from "react";
import { Link } from "react-router-dom";
import { useContext} from 'react';
import AppContext from '../../auth/AppContext';

export default class MembershipValidation extends Component {

  render() {
    return (
      <div className="container-fluid">
        <div className="banner">
          <h3>Membership Rules</h3>
        </div>
        <div className="row">
          <p>
            1. Membership for mentors is available to anyone 18 years of age or
            older.{" "}
          </p>
        </div>
        <div className="row">
          {" "}
          2. You must NOT conduct any fraudulent activity or have more than one
          Account.
        </div>

        <div className="row">
          <p>
            {" "}
            <input type="checkbox" /> I have read, understood, and accepted the
            rules for membership.
          </p>
        </div>

        <form className="container-fluid">
          <div className="banner">
            <h3>Upload Documents</h3>
          </div>
          <p>
            {" "}
            We will use these documents to get an enhanced DBS certificate as
            part of our, Keeping Children Safe in Education.
          </p>
          <div className="row">
            <p>
              <b>Identity Proof </b>
              <input type="text" />
              <input type="file" />
            </p>
          </div>
          <div className="row">
            <p>
              <b>Address Proof </b>
              <input type="text" />
              <input type="file" />
            </p>
          </div>
        </form>
        <div className="banner">
          <h3>Privacy Policy</h3>
        </div>
        <div className="row">
          <p>
            Please read our Privacy Policy in order to understand how your
            information is used and shared, and check below if you accept the
            policy.
          </p>
        </div>
        <div className="row">
          <p>
            {" "}
            <input type="checkbox" /> I have read, understood, and accept the
            PRIVACY POLICY for membership.
          </p>
        </div>

        <div className="row">
          <p>
            Once your documents are validated, you will be contacted for an
            interview to discuss your mentoring opportunities.
          </p>
        </div>
        <div className="row">
          <button className="button btn btn-info">Save</button>
          <Link to={`/mentorProfile`}>
          <button className="button btn btn-info">Proceed</button>
          </Link>
        </div>
      </div>
    );
  }
}
