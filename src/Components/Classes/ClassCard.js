import React from "react";
import './Class.css';

const ClassCard = () => {
  return (
    <div className="col-12 col-md-4 col-xl-3 cardtext">
        <div className="card-body" style={{ width: "200px" }}>
          <h5 className="card-title">English Writing</h5>
          <ul className="list-unstyled">
            <li>Date : 02/01/2021</li>
            <li>Time : 10am -12pm</li>
            <li>Students No. : 6</li>
          </ul>
          <button className="btn btn-outline-primary" type="button">
            Cancel the className
          </button>
        </div>
      </div>
  
  );
};

export default ClassCard;
