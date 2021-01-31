import { React, useEffect, useState } from "react";
import "./kids-availability.css";
import ActivityList from "../ActivityListScreen/ActivityList.js";
import ActivityAPI from "../../services/activity-api";
import BookingList from "./BookingList";
import axios from "axios";

const Kidsavailability = (props) => {
  const [BookedActivities, setBookedActivities] = useState([]);

  const [displayActivities, setDisplayActivities] = useState(false);

  const userId = "60055c859ee88b00776dc57f";

  useEffect(() => {
    //initiate  a GET  to API endpoint
    axios
      .get(
        `https://k2q4xg1r4e.execute-api.eu-west-2.amazonaws.com/dev/Booking/${userId}`
      )
      //if successful fill activities
      .then((response) => {
        setBookedActivities(response.data);
      })
      //if error, log error
      .catch((error) => console.log("error = " + error));
  }, []);

  const cancelBooking = (BookingId) => {
    const updatedBookings = BookedActivities.filter(
      (booking) => booking.bookingId !== BookingId
    );
    setBookedActivities(updatedBookings);
  };

  const toggleActivityDisplay = () => {
    setDisplayActivities(!displayActivities);
    console.log("Toggling acivities " + displayActivities);
  };

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
            <td> </td>
            <th scope="col">#</th>
            <th scope="col">Booked</th>
            <th scope="col">When</th>
            <th scope="col">Amend</th>
          </tr>
        </thead>
        <tbody>
          {" "}
          <BookingList BookedActivities={BookedActivities} />
        </tbody>
      </table>
      {/* <button class="btn btn-info" onClick={()=>ActivityListScreen()}>More Activites</button> */}

      <div>
        <button class="btn btn-info" onClick={toggleActivityDisplay}>{ displayActivities ?"Hide activity list": "Show more activities" }</button>
      </div>

      <div className="showActivities">
        <div className="row">
        { displayActivities ? <ActivityList activities={ActivityAPI.getAll()}/> : "" }
        </div>
      </div>
    </div>
  );
};

export default Kidsavailability;
