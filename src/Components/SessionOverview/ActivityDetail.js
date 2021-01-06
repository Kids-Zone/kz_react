import "./ActivityDetail.css";
import { Link } from "react-router-dom";
import ActivityAPI from "../../services/activity-api";

const ActivityDetail = (props) => {
  const activity = ActivityAPI.get(props.match.params.id);

  const jumbotronStyle = {
    backgroundImage:
      "linear-gradient(rgba(0,0,0,.65),rgba(0,0,0,.1)), url(/images/" +
      activity.id +
      ".jpg)",
    backgroundAttachment: "fixed",
    backgroundRepeat: "no-repeat",
    height: "45vh",
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
            <Link to={"/register"}>
              <button class="btn btn-primary">Book now</button>
            </Link>
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
