import "./SessionOverview.css";
import UpcomingSessions from "../UpcomingSessions/UpcomingSessions.js";

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
        <p>Everything you need for the lesson you need will be provided in class. </p>
      </div>
      <div class="row">
        <div class="col-md6">
          <div class="btn-toolbar">
            <button class="btn btn-primary">Book now</button>
            <button class="btn btn-info">Book Next Lesson</button>
          </div>
        </div>
      </div>
      <div class="p-4 mb-3 mt-2 bg-light rounded border border-primary">
        <h4>A quote from Mike - aged 15</h4>
        <p class="mb-0 font-italic">
          I recommend this dance class to anyone, it's a great way to chill out and learn a new skill.
        </p>
      </div>
    </div>
  </div>
);

export default SessionOverviewDrum;
