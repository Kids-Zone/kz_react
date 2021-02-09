import React from "react";
import "./Availability.css";
import { Link } from "react-router-dom";
import {
  Container,
} from "react-bootstrap";
const Availability = () => {
  return (
    <>
    <Container>
        
        <div className="row banner">
            <h3>My Schedule</h3>
          </div> 
        <Link to={`/schedule/new`}>
        <button className="btn btn-primary">Schedule activity</button>
        </Link>
        <Link to={`/manageSchedule`}>
        <button className="btn btn-primary">Manage Schedule</button>
        </Link>
      </Container>
      <Container>
      
      {/* <div >
        <div className="container">
          <div className="mt-5 mb-5"> */}
            <div className="container" id="cal">
              <i className="fa fa-calendar-o d-none"></i>
              <div className="row date-cont date-sticky">
                <div className="col">
                  <p className="text-center text-white mb-2 mt-2" id="Month"></p>
                  <p className="date">Apr</p>
                </div>
                <div className="col">
                </div>
                <div className="col">
                </div>
                <div className="col">
                </div>
                <div className="col">
                </div>
                <div className="col">
                </div>
                <div className="col">
                </div>
                <div className="col">
                  <p className="text-center text-white mb-2 mt-2" id="year"></p>
                  <p className="date">2021</p>
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
                    Drumming Class
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
                  <p className="text-center text-white bg-success event event-spec">
                   Writing Class
                  </p>
                </div>
                <div className="col-md-1 day bg-events">
                  <p className="date">17</p>
                </div>
                <div className="col-md-1 day bg-events">
                  <p className="date">18</p>
                </div>
                <div className="col-md-1 day bg-events">
                  <p className="date">19</p>
                </div>
                <div className="col-md-1 day bg-events">
                  <p className="text-nowrap date">20</p>
                  <p className="text-center text-white bg-success event event-spec">
                   Reading Class
                  </p>
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
                  <p
                    className="text-center text-white bg-primary event"
                    data-toggle="tooltip"
                    data-bs-tooltip=""
                    title="Click for more info"
                  >
                    Cooking Class
                  </p>
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
          {/* </div>
        </div>
      </div> */}
      </Container>
    </>
  );
};

export default Availability;
