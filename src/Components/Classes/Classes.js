import React from "react";
import ClassCard from "./ClassCard";
export const Classes = () => {
  return (
    <>
      <div className="row">
        <div className="col">
          <h3 className="text-center" style={{ marginTop: "10px" }}>
            Week Starting 01/01/2021
          </h3>
        </div>
      </div>
      <div style={{ marginTop: "5px" }}>
        <div className="container">
          <div className="row mb-3">
            <ClassCard />
            <ClassCard />
            <ClassCard />
            <ClassCard />
            <ClassCard />
            <ClassCard />
            <ClassCard />
            <ClassCard />
          </div>
        </div>
      </div>
    </>
  );
};
