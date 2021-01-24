import React from "react";
import "./Mentor.css";
import {Link} from 'react-router-dom'

const ManageActivityPlan = () => {
  return (
    <div>
      <div className="row">
        <div className="col">
          <h2 className="text-center" style={{ marginTop: "10px" }}>
            Manage activities
          </h2>
      <Link to={`/availability`}>
        <button class="btn btn-primary">My Planner</button>
        </Link>
        </div>
      </div>
    <table class="table table-striped">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Activity</th>
        <th scope="col">Schedule</th>
        <th scope="col">Participants</th>
        <th scope="col">Amend</th>
        
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">1</th>
        <td>Drumming</td>
        <td>Monday-Friday</td>
        <td><button class="btn btn-info">View</button></td>
        <td>
        <Link to={`/createPlan`}>
        <button class="btn btn-primary">Edit</button>
        </Link>
        <button class="btn btn-info">Cancel</button></td>
      </tr>
      <tr>
        <th scope="row">2</th>
        <td>Craft</td>
        <td>Tuesday-wednesday</td>
        <td><button class="btn btn-info">View</button></td>
        <td>
        <Link to={`/createPlan`}>
        <button class="btn btn-primary">Edit</button>
        </Link>
        <button class="btn btn-info">Cancel</button></td>
      </tr>
      <tr>
        <th scope="row">3</th>
        <td>Dance</td>
        <td>Monday-Wednesday</td>
        <td><button class="btn btn-info">View</button></td>
        <td>
        <Link to={`/createPlan`}>
        <button class="btn btn-primary">Edit</button>
        </Link>
        <button class="btn btn-info">Cancel</button></td>
      </tr>
    </tbody>
  </table>
  </div>
  );
};

export default ManageActivityPlan;
