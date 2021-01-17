import React from "react";
import "./kids-availability.css";

const kidsavailability = () => {
  return (
    <>
      <div className="row">
        <div className="col">
          <h3 className="text-center" style={{ marginTop: "10px" }}>
            My booked activities
          </h3>
        </div>
      </div>
      <div>
        <div className="container" >
          <div className="mt-5 mb-5">
            <div className="container" id="cal">
              <i className="fa fa-calendar-o d-none"></i>
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
                    Cooking Class 18:00
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
                  <p
                    className="text-center text-white bg-primary event"
                    data-toggle="tooltip"
                    data-bs-tooltip=""
                    title="Click for more info"
                  >
                    Cooking Class 18:00
                  </p>
                </div>
                <div className="col-md-1 day bg-events">
                  <p className="date">16</p>
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
                    Drumming 16:00
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
                  <p className="text-center text-white bg-success event event-spec">
                    Drumming 16:00
                  </p>
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
                  <a href="#"></a>
                </div>
                <div className="col-md-1 day bg-events">
                  <p className="date">31</p>
                  <a href="#"></a>
                </div>
                <div className="col-md-1 text-truncate d-none d-md-block pl-1 pr-1 day-blank"></div>
                <div className="col-md-1 text-truncate d-none d-md-block pl-1 pr-1 day-blank"></div>
                <div className="col-md-1 text-truncate d-none d-md-block pl-1 pr-1 day-blank"></div>
                <div className="col-md-1 text-truncate d-none d-md-block pl-1 pr-1 day-blank"></div>
                <div className="col-md-1 text-truncate d-none d-md-block pl-1 pr-1 day-blank"></div>
                <div className="col-md-1 text-truncate d-none d-md-block pl-1 pr-1 day-blank"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default kidsavailability;
