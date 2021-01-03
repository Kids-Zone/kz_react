import "./SessionOverview.css";
import UpcomingSessions from "../UpcomingSessions/UpcomingSessions.js";
import { Link, useHistory } from 'react-router-dom';

const SessionOverviewDrum = (props) => (
  <div>
    <div class="jumbotron jumbotron-detail-drumming container-fluid">
      <div class="container">
        <h1 class="display-3 text-white">Drumming</h1>
      </div>
    </div>

    <div class="container">
      <h2>
        Enjoy drumming and make some noise! 
        <small> Whether you're a beginner or want to improve your technique all abilities are welcome.</small>
      </h2>
      <div class="row">
        <p>
           We’re so proud to have a fantastic team of drum teachers. We cover all styles from rock and pop to blues and funk.</p>
           <p> Everything you need for the lesson you need will be provided in class.  </p>
      </div>
      <div class="row">
        <div class="col-md6">
            <button class="btn btn-primary">Book now</button>
            <Link to={`/activities`}>
              <button class="btn btn-info">More Activites</button>
            </Link>
        </div>
      </div>
      <div class="p-4 mb-3 mt-2 bg-light rounded border border-primary">
        <h4>A quote from Angela - aged 14</h4>
        <p class="mb-0 font-italic">
          I recommend this Drum class to anyone, it's a great way to chill out and learn a new skill.
        </p>
      </div>
    </div>
  </div>
);

export default SessionOverviewDrum;
