import "./SessionOverview.css";
import UpcomingSessions from "../UpcomingSessions/UpcomingSessions.js";

const SessionOverview = (props) => (
  <div>
    <div class="jumbotron jumbotron-detail-cooking container-fluid">
      <div class="container">
        <h1 class="display-3 text-white">Cooking and Baking</h1>
      </div>
    </div>

    <div class="container">
      <h2>
        Cooking lesson this week is{" "}
        <small>everyone's favourite Apple pie.</small>
      </h2>
      <div class="row">
        <p>Everything you need for the lesson you need will be provided in class. </p>
      </div>
      <div class="row">
        <p>If you are following from home, a click the recipe for more details.</p>
      </div>      <div class="row">
        <div class="col-md6">
          <div class="btn-toolbar">
            <button class="btn btn-primary">Book now</button>
            <button class="btn btn-info">Recipe</button>
          </div>
        </div>
      </div>
      <div class="p-4 mb-3 mt-2 bg-light rounded border border-primary">
        <h4>A quote from Martin - aged 11</h4>
        <p class="mb-0 font-italic">
          I made this for my family and they all loved it. It's so easy to
          follow the instructions.
        </p>
      </div>

      <h4 class="my-4">
        You might be interested in next week's cooking class.
      </h4>
      <div>
        <div>
          <UpcomingSessions></UpcomingSessions>
        </div>
      </div>
    </div>
  </div>
);

export default SessionOverview;
