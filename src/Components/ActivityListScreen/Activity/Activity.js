import "./Activity.css";
import { Link } from "react-router-dom";

function Activity(props) {
  const style = {
    backgroundImage:
      "linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.1)), url(/images/" +
      props.title +
      ".jpg)",
    backgroundSize: "cover",
    backgroundColor: "rgba(52, 0, 134, 0.85)",
  };

  return (
    <div className="col-12 col-md-4 col-xl-3 img-text" style={style}>
      <div className="card-body" style={{ width: "200px" }}>
        <h5>{props.title} </h5>
        <ul className="list-unstyled">
          <li>Days :{props.schedule}</li>
          <li>Max Occupants :{props.maxcount}</li>
        </ul>
          <Link to={`/activities/${props.title}`}>
            <button className="button btn btn-info">Read More</button>
          </Link>
        <Link to="/activityList" />
      </div>
    </div>
  );
}

export default Activity;
