import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import { React, useEffect, useState } from "react";
import ActivityAPI from "../../services/activity-api";
import ActivityList from "../ActivityListScreen/ActivityList.js";
import BookingList from "./BookingList";
import "./kids-availability.css";

const Kidsavailability = (props) => {
  const [bookedActivities, setBookedActivities] = useState([]);

  const [displayActivities, setDisplayActivities] = useState(false);

  const [activities, setActivities] = useState([]);

  const [loaded, isLoaded] = useState(true)

  useEffect(() => {
    ActivityAPI.getAll().then((data) => {
      setActivities(data)
      isLoaded(true)
    });
  },[loaded]);

  const { user } = useAuth0();

  const userId = user && user.sub ? user.sub.split("|")[1] : "";

  useEffect(() => {
    axios
      .get(
        `https://k2q4xg1r4e.execute-api.eu-west-2.amazonaws.com/dev/Booking/${userId}`
      )
      //if successful fill booked activities
      .then((response) => {
        setBookedActivities(response.data);
      })
      //if error, log error
      .catch((error) => console.log("error = " + error));
  }, [userId]);

  const toggleActivityDisplay = () => {
    setDisplayActivities(!displayActivities);
  };

  const deleteBooking = (id) => {
    console.log("Deleting " + id);
    ActivityAPI.delete(id).then(() => {
      let filtered = bookedActivities.filter((booking) => {
        return booking.booking_id !== id;
      })
      setBookedActivities([...filtered]);
    });
  };

  return (
    <div>
      <div className="row">
        <div className="col">
          <h2 className="text-center" style={{ marginTop: "10px" }}>
            What I've booked 
          </h2>
        <button class="btn btn-info" onClick={toggleActivityDisplay}>
          {displayActivities ? "Show less" : "More Activities"}
        </button>
      </div>
      </div>
      <table class="table table-striped">
        <thead>
          <tr>
            <td> </td>
            <th scope="col">Reference</th>
            <th scope="col">Activity</th>
            <th scope="col">When</th>
            <th scope="col">Amend</th>
          </tr>
        </thead>
        <tbody>
          {" "}
            {bookedActivities ? (
              <BookingList
                bookedActivities={bookedActivities}
                deleteBooking={deleteBooking}
              />
            ):(
              "No bookings so far....."
            )  }
        </tbody>
      </table>
      <div className="showActivities">
        <div className="row">
          {displayActivities ? <ActivityList activities={activities} /> : ""}
        </div>
      </div>
    </div>
  );
};

export default Kidsavailability;
