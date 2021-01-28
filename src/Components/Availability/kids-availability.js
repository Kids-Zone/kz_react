import { React, useEffect,useState } from "react";
import "./kids-availability.css";
import ActivityList from "../ActivityListScreen/ActivityList.js";
import ActivityAPI from "../../services/activity-api";
import axios from "axios";

const Kidsavailability = (props) => {
  const [activities, setActivities] = useState([]);
  const userId = "60055c859ee88b00776dc57f";

  useEffect(() => {
    //initiate  a GET  to API endpoint
    axios
      .get(
        "https://k2q4xg1r4e.execute-api.eu-west-2.amazonaws.com/dev/Booking/60055c859ee88b00776dc57f"
      )
      //if successful print to log for now
      .then((response) => {
        setActivities(response.data)
      })
      //if error, log error
      .catch((error) => console.log("error = " + error));
  }, []);

    return (
    <div>
      <div className="row">
        <div className="col">
          <h2 className="text-center" style={{ marginTop: "10px" }}>
            My booked activities
          </h2>
        </div>
      </div>
      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Booked</th>
            <th scope="col">When</th>
            <th scope="col">Amend</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>name {activities[0] ? activities[0].activity_name : 'no activity'} </td>
            <td>Tomorrow 4pm</td>
            <td>
              <button class="btn btn-primary">Rebook</button>
              <button class="btn btn-info">Cancel</button>
            </td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Craft</td>
            <td>Thursday 7th 4.30pm </td>
            <td>
              <button class="btn btn-primary">Rebook</button>
              <button class="btn btn-info">Cancel</button>
            </td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Dance</td>
            <td></td>
            <td>
              <button class="btn btn-primary">Rebook</button>
              <button class="btn btn-info">Cancel</button>
            </td>
          </tr>
        </tbody>
      </table>
      {/* <button class="btn btn-info" onClick={()=>ActivityListScreen()}>More Activites</button> */}
      <div className="row">
        <ActivityList activities={ActivityAPI.getAll()} />
      </div>
    </div>
  );
};

export default Kidsavailability;
