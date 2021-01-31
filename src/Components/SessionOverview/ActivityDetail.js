import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import { Link } from "react-router-dom";
import ActivityAPI from "../../services/activity-api";
import "./ActivityDetail.css";

const ActivityDetail = (props) => {
  const activity = ActivityAPI.get(props.match.params.id);
  const { loginWithRedirect } = useAuth0();
  const { isAuthenticated } = useAuth0();

  const { user } = useAuth0();

  const user_id = user && user.sub ? user.sub.split("|")[1] : "";

  const jumbotronStyle = {
    backgroundImage:
      "linear-gradient(rgba(0,0,0,.65),rgba(0,0,0,.1)), url(/images/" +
      activity.title +
      ".jpg)",
    backgroundAttachment: "fixed",
    backgroundRepeat: "no-repeat",
    height: "45vh",
  };

  const bookActivity = () => {
    //initiate  a POST  to API endpoint
    axios({
      method: "post",
      url: "/dev/Booking/",
      data: {
        user_id: user_id,
        activity_id : activity.id
      }
    })
      //if successful print to log for now
      .then((response) => {
        console.log(response.data);
        props.history.push({
          pathname: "/kidsavailability" 
        });
      })
      //if error, log error
      .catch((error) => console.log("error = " + error));
  };

  return (
    <div>
      <div class="jumbotron container-fluid" style={jumbotronStyle}>
        <div class="container">
          <h1
            class="display-3 text-white"
            style={{ textTransform: "uppercase", letterSpacing: ".2em" }}
          >
            {activity.title}
          </h1>
        </div>
      </div>

      <div class="container">
        <h2>{activity.summary}</h2>
        <div class="row">
          <p>{activity.details}</p>
        </div>
        <div class="row">
          <div class="col-md6">
            {!isAuthenticated && (
              <button
                class="btn btn-primary"
                onClick={() => loginWithRedirect()}
              >
                Book now
              </button>
            )}
            {isAuthenticated && (
              <button class="btn btn-primary" onClick={() => bookActivity()}>
                Book now
              </button>
            )}

            <Link to={`/activities`}>
              <button class="btn btn-info">More Activites</button>
            </Link>
          </div>
        </div>
        <div class="p-4 mb-3 mt-2 bg-light rounded border border-primary">
          <h4>A quote from one of our students</h4>
          <p class="mb-0 font-italic">{activity.quote}</p>
        </div>
      </div>
    </div>
  );
};

export default ActivityDetail;
