import "./About.css";
import { useHistory } from "react-router-dom";

function About() {
  const history = useHistory();

  return (
    <div className="container">
      <div className="banner">
        <h3>Who we are</h3>
      </div>
      <div className="content">
        <p>
          KidsZone is a safe space where you can learn and have fun. It is a educational and engaging club for children
          that from 8-15 yrs.
        </p>
      </div>
      <div className="banner">
        <h4>
          As we are currently in <b>lockdown</b> all classes where possible are
          now offered online.
        </h4>
      </div>
      <div><p></p></div>
      <div className="banner">
        <h3>What we offer</h3>
      </div>
      <div className="content">
        <p>
          {" "}
          We've a great space for you to enjoy you can drop in and have chat
          with friends, listen to some music in the communal area. There's also
          table tennis and pool tables with no booking required. We've lots of
          classes to join, if you can't make it to the club there's also range
          of activities available online. Please drop in and see what we have to
          offer!
        </p>
      </div>

      <div className="row activity_section">
        <div className="col-md6  img-text online-dance-img">
          <button
            className="button btn btn-info"
            onClick={() => history.push("/activities")}
          >
            Read More..
          </button>
        </div>

        <div className="col-md6 img-text premise-drummer-img">
          <button
            className="button btn btn-info"
            onClick={() => history.push("/activities")}
          >
            Read More..
          </button>
        </div>
      </div>
      <div className="banner">
        <h3>Want to Mentor</h3>
      </div>
      <div className="content">
        <p>
          If you wish to be a mentor then we can offer many opportunities.
          Either online teaching or mentoring at the club. All our teachers are
          CRB/DBS checked and fully qualified in their field.{" "}
        </p>
        <p>
          All classes have a maximum occupancy limit based on category and
          available resources. You can plan the activities based on your
          schedule and publish availability.
        </p>
      </div>

      <div className="row activity_section">
        <div className="col-12 img-text mentor-img">
          <button
            className="button btn btn-info"
            onClick={() => history.push("/classes")}
          >
            Read More..
          </button>
        </div>
      </div>
    </div>
  );
}
export default About;
