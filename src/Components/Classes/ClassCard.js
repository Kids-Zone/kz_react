import React from "react";

const ClassCard = () => {
  return (
    <div className="col-12 col-md-6 col-xl-3">
      <div className="card" style={{ margin: "0px", marginTop: "11px" }}>
        <div className="card-body" style={{ width: "245px" }}>
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
    </div>
  );
};

export default ClassCard;
