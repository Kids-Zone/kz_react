import React, {useEffect, useState } from "react";
import "./Mentor.css";
import {Link} from 'react-router-dom'
import ScheduledActivityList from "./ScheduledActivityList"
import axios from "axios"

const ManageSchedule = () => {
  const [activitySchedule ,setActivitySchedule] =useState([]);  
  const userId = "6005665ed93fdd006facc1c9";
  const [participants,setParticipants] =useState(null);
  const [access,setAccess] =useState('hide'); 
  const manageSchedule ={
    activitySchedule :activitySchedule,
    participants :participants,
    access :access,
    setActivitySchedule,
    setParticipants,
    setAccess
  }
  
  useEffect(() => {
    //initiate  a GET  to API endpoint
    axios
      .get(
        `https://k2q4xg1r4e.execute-api.eu-west-2.amazonaws.com/dev/schedule/${userId}`
      )
      //if successful print to log for now
      .then((response) => {
        console.log(response.data)
        setActivitySchedule(response.data)
      })
      //if error, log error
      .catch((error) => console.log("error = " + error));
  }, []);
  
  return (
    <div>
      <div className="row">
        <div className="col">
          <h2 className="text-center" style={{ marginTop: "10px" }}>
            Manage Schedule
          </h2>
        <Link to={`/availability`}>
        <button className="btn btn-primary">My Schedule</button>
        </Link>
        </div>
      </div>
    <table className="table table-striped">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Activity</th>
        <th scope="col">Schedule</th>
        <th scope="col">Type</th>
        <th scope="col">Active</th>
        <th scope="col">Participants</th>
        <th scope="col">Amend</th>  
      </tr>
    </thead>
    <tbody>
      <ScheduledActivityList activitySchedule = {activitySchedule} manageSchedule ={manageSchedule}/>
      { access === 'show' && (
        <>
        <tr>View participants here</tr>
        </>
      )} 
    </tbody>
  </table>
  </div>
  );
};

export default ManageSchedule;
