import React from "react";
import "./Availability.css";
import { Link } from "react-router-dom";

const Availability = () => {
  return (
    <>
      <div className="row">
        <div className="col">
          <h3 className="text-center" style={{ marginTop: "10px" }}>
            My Planner
          </h3>
          <Link to={`/managePlan`}>
            <button class="btn btn-primary">Manage Plan</button>
          </Link>
        </div>
      </div>
      <div style={{ marginTtop: "10px" }}>
        <div className="container" style={{ marginBottom: "11px" }}>
          <div className="mt-5 mb-5">
            <div className="container" id="cal">
              <i className="fa fa-calendar-o d-none"></i>
              <div className="row date-cont date-sticky">
                <div className="col">
                  <p className="text-center text-white mb-2 mt-2" id="year"></p>
                </div>
              </div>
              <div className="row d-none d-md-flex seven-cols days-sticky">
                <div className="col-md-1 day days">
                  <p className="text-center text-black">SUNDAY</p>
                </div>
                <div className="col-md-1 day days">
                  <p className="text-center text-black">MONDAY</p>
                </div>
                <div className="col-md-1 day days">
                  <p className="text-center text-black">TUESDAY</p>
                </div>
                <div className="col-md-1 day days">
                  <p className="text-center text-black">WEDNESDAY</p>
                </div>
                <div className="col-md-1 day days">
                  <p className="text-center text-black">THURSDAY</p>
                </div>
                <div className="col-md-1 day days">
                  <p className="text-center text-black">FRIDAY</p>
                </div>
                <div className="col-md-1 day days">
                  <p className="text-center text-black">SATURDAY</p>
                </div>
              </div>
              <div className="row seven-cols">
                <div className="col-md-1 text-truncate d-none d-md-block pl-1 pr-1 day-blank"></div>
                <div className="col-md-1 text-truncate d-none d-md-block pl-1 pr-1 day-blank"></div>
                <div className="col-md-1 text-truncate d-none d-md-block pl-1 pr-1 day-blank"></div>
                <div className="col-md-1 text-truncate d-none d-md-block pl-1 pr-1 day-blank"></div>
                <div className="col-md-1 day bg-events">
                  <p className="date">1</p>
                </div>
                <div className="col-md-1 day bg-events">
                  <p className="date">2</p>
                </div>
                <div className="col-md-1 day bg-events">
                  <p className="date">3</p>
                </div>
                <div className="col-md-1 day bg-events">
                  <p className="date">4</p>
                </div>
                <div className="col-md-1 day bg-events">
                  <p className="date">5</p>
                </div>
                <div className="col-md-1 day bg-events">
                  <p className="date">6</p>
                </div>
                <div className="col-md-1 day bg-events">
                  <p className="date">7</p>
                </div>
                <div className="col-md-1 day bg-events">
                  <p className="date">8</p>
                  <p
                    className="text-center text-white bg-primary event"
                    data-toggle="tooltip"
                    data-bs-tooltip=""
                    title="Click for more info"
                  >
                    Cooking Class 12:00 PM
                  </p>
                </div>
                <div className="col-md-1 day bg-events">
                  <p className="date">9</p>
                </div>
                <div className="col-md-1 day bg-events">
                  <p className="date">10</p>
                </div>
                <div className="col-md-1 day bg-events">
                  <p className="date">11</p>
                </div>
                <div className="col-md-1 day bg-events">
                  <p className="date">12</p>
                </div>
                <div className="col-md-1 day bg-events">
                  <p className="date">13</p>
                </div>
                <div className="col-md-1 day bg-events">
                  <p className="date">14</p>
                </div>
                <div className="col-md-1 day bg-events">
                  <p className="date">15</p>
                </div>
                <div className="col-md-1 day bg-events">
                  <p className="date">16</p>
                </div>
                <div className="col-md-1 day bg-events">
                  <p className="date">17</p>
                  <p className="text-center text-white bg-success event event-spec">
                    English Reading Class 11:00 AM
                  </p>
                </div>
                <div className="col-md-1 day bg-events">
                  <p className="date">18</p>
                </div>
                <div className="col-md-1 day bg-events">
                  <p className="date">19</p>
                </div>
                <div className="col-md-1 day bg-events">
                  <p className="text-nowrap date">20</p>
                </div>
                <div className="col-md-1 day bg-events">
                  <p className="date">21</p>
                </div>
                <div className="col-md-1 day bg-events">
                  <p className="date">22</p>
                </div>
                <div className="col-md-1 day bg-events">
                  <p className="date">23</p>
                </div>
                <div className="col-md-1 day bg-events">
                  <p className="date">24</p>
                </div>
                <div className="col-md-1 day bg-events">
                  <p className="text-nowrap date">25</p>
                </div>
                <div className="col-md-1 day bg-events">
                  <p className="date">26</p>
                </div>
                <div className="col-md-1 day bg-events">
                  <p className="date">27</p>
                </div>
                <div className="col-md-1 day bg-events">
                  <p className="date">28</p>
                </div>
                <div className="col-md-1 day bg-events">
                  <p className="date">29</p>
                </div>
                <div className="col-md-1 day bg-events">
                  <p className="date">30</p>
                </div>
                <div className="col-md-1 day bg-events">
                  <p className="date">31</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Availability;
