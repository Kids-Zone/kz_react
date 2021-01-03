import "./SessionOverview.css";
import UpcomingSessions from "../UpcomingSessions/UpcomingSessions.js";
import { Link, useHistory } from 'react-router-dom';

const SessionOverviewDrum = (props) => (
  <div>
    <div class="jumbotron jumbotron-detail-dance container-fluid">
      <div class="container">
        <h1 class="display-3 text-white">Dance</h1>
      </div>
    </div>

    <div class="container">
      <h2>
        A high energy dance class
        <small> over the course you will work on street dance foundation steps</small>
      </h2>
      <div class="row">
        <p>Our students perform regularly at events across Manchester it's a great experience. 
           Once you join, you will always want to be a part of our dance family.</p>
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
        <h4>A quote from Mike - aged 15</h4>
        <p class="mb-0 font-italic">
          I recommend this dance class to anyone, it's a great way to get fit and learn a new skill.
        </p>
      </div>
    </div>
  </div>
);

export default SessionOverviewDrum;
