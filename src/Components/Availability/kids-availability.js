import React from "react";
import "./kids-availability.css";

const kidsavailability = () => {
  return (
    <div>
      <div className="row">
        <div className="col">
          <h2 className="text-center" style={{ marginTop: "10px" }}>
            My booked activities
          </h2>
        </div>
      </div>
    <table class="table table-striped">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Booked</th>
        <th scope="col">When</th>
        <th scope="col">Amend</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">1</th>
        <td>Drumming</td>
        <td>Tomorrow 4pm</td>
        <td><button class="btn btn-primary">Rebook</button>
        <button class="btn btn-info">Cancel</button></td>
      </tr>
      <tr>
        <th scope="row">2</th>
        <td>Craft</td>
        <td>Thursday 7th 4.30pm</td>
        <td><button class="btn btn-primary">Rebook</button>
        <button class="btn btn-info">Cancel</button></td>
      </tr>
      <tr>
        <th scope="row">3</th>
        <td>Dance</td>
        <td>Wednesday 5th 5pm</td>
        <td><button class="btn btn-primary">Rebook</button>
        <button class="btn btn-info">Cancel</button></td>
      </tr>
    </tbody>
  </table>
  </div>
  );
};

export default kidsavailability;
