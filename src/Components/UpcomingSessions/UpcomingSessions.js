import "./UpcomingSessions.css";

const UpcomingSessions = (props) => (
  <div>
    <div class="row">
      <div class="col-md-3 col-sm-6 mb-3">
        <p>Cheesecake!</p>
        <a href="cooking.html">
          <img
            class="rounded-circle"
            height="100"
            width="100"
            src="../../images/cheesecakesmall.jpg"
            alt="cheesecake"
          />
        </a>
      </div>
    </div>

    <div class="row">
      <div class="col-md6">
        <div class="btn-toolbar">
          <button class="btn btn-primary">Book next week</button>
          <button class="btn btn-info">More Activities</button>
        </div>
      </div>
    </div>
  </div>
);

export default UpcomingSessions;
