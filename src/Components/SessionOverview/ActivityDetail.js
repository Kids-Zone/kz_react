import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ActivityAPI from "../../services/activity-api";
import "./ActivityDetail.css";

const ActivityDetail = (props) => {
  const activityTitle = props.match.params.id;
  const [activity, setActivity] = useState(null);

  useEffect(() => { 
    axios
      .get(
        `https://k2q4xg1r4e.execute-api.eu-west-2.amazonaws.com/dev/ActivityByName/${activityTitle}`
      )
      //if successful get activity details
      .then((response) => {
          setActivity(response.data[0]);
      })
      .catch((error) => console.log("error = " + error));
      
  }, [activityTitle], );

/*   useEffect(() => {
    ActivityAPI.getActivity(activityId).then((data) => setActivity(data));
  }); */

  const { loginWithRedirect } = useAuth0();
  const { isAuthenticated } = useAuth0();

  const { user } = useAuth0();

  const user_id = user && user.sub ? user.sub.split("|")[1] : "";

  const jumbotronStyle = {
    backgroundImage:
      "linear-gradient(rgba(0,0,0,.65),rgba(0,0,0,.1)), url(/images/" +
      activityTitle +
      ".jpg)",
    backgroundAttachment: "fixed",
    backgroundRepeat: "no-repeat",
    height: "45vh",
  };

  const bookActivity = () => {

    console.log(activity)
    //initiate  a POST  to API endpoint
    axios({
      method: "post",
      url: "https://k2q4xg1r4e.execute-api.eu-west-2.amazonaws.com/dev/Booking/",
      data: {
        user_id: user_id,
        activity_id : activity.activity_id
      }
    })
      //if successful go to booked screen
      .then((response) => {
        props.history.push({
          pathname: "/kidsavailability" 
        });
      })
      //if error, log error
      .catch((error) => console.log("error = " + error));
      
  };
  


    return (
    
    <div>
      { activity ?  
          <div>
          <div class="jumbotron container-fluid" style={jumbotronStyle}>
            <div class="container">
              <h1
                class="display-3 text-white"
                style={{ textTransform: "uppercase", letterSpacing: ".2em" }}
              >
                {activityTitle}
              </h1>
            </div>
          </div>
    
          <div class="container">
             <h2>{activity.activity_summary}</h2>
            <div class="row">
              <p>{activity.activity_details}</p>
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
    
    : ""
    }
      </div>
      
      )
           
  
};

export default ActivityDetail;
