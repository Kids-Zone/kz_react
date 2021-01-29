import React, {useEffect, useState } from "react";
import "./Mentor.css";
import {Link} from 'react-router-dom'
import ActivityPlanList from "./ActivityPlanList";
import axios from "axios"

const ManageActivityPlan = () => {
  const [plannedActivities ,setPlannedActivities] =useState([]);  
  const userId = "60055c859ee88b00776dc57f";

  useEffect(() => {
    //initiate  a GET  to API endpoint
    axios
      .get(
        `https://k2q4xg1r4e.execute-api.eu-west-2.amazonaws.com/dev/viewPlan/${userId}`
      )
      //if successful print to log for now
      .then((response) => {
        console.log(response.data)
        setPlannedActivities(response.data)
      })
      //if error, log error
      .catch((error) => console.log("error = " + error));
  }, []);
  
  
  return (
    <div>
      <div className="row">
        <div className="col">
          <h2 className="text-center" style={{ marginTop: "10px" }}>
            Manage activities
          </h2>
        <Link to={`/availability`}>
        <button className="btn btn-primary">My Planner</button>
        </Link>
        </div>
      </div>
    <table className="table table-striped">
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
      <ActivityPlanList plannedActivities = {plannedActivities}/>
    </tbody>
  </table>
  </div>
  );
};

export default ManageActivityPlan;
