import "./SessionOverview.css";
import UpcomingSessions from "../UpcomingSessions/UpcomingSessions.js";
import { Link, useHistory } from 'react-router-dom';

const SessionOverview = (props) => (
  <div>
    <div class="jumbotron jumbotron-detail-cooking container-fluid">
      <div class="container">
        <h1 class="display-3 text-white">Cooking and Baking</h1>
      </div>
    </div>

    <div class="container">
      <h2>
        Cooking and Baking
        <small> whatever we're making it'll always taste wonderful!</small>
      </h2>
      <div class="row">
        <p>
          Our cookery and baking courses are specifically designed to inspire and engage. 
          Everyone always leaves inspired after having a great time in the kitchen under the amiable supervision of our chefs.
          </p>
         <p> Everything you need for the lesson you need will be provided in class. </p>
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
