import "./SessionOverview.css";
import UpcomingSessions from "../UpcomingSessions/UpcomingSessions.js";

const SessionOverviewdrum = (props) => (
  <div>
    <div class="jumbotron jumbotron-detail-drumming container-fluid">
      <div class="container">
        <h1 class="display-3 text-white">Drumming</h1>
      </div>
    </div>

    <div class="container">
      <h2>
        Lesson this week is{" "}
        <small>focusing on reading sheet music</small>
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
        <h4>A quote from Angela - aged 14</h4>
        <p class="mb-0 font-italic">
          I recommend this Drum class to anyone, it's a great way to chill out and learn a new skill.
        </p>
      </div>
    </div>
  </div>
);

export default SessionOverviewdrum;
