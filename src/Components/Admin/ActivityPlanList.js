import {Link} from 'react-router-dom'
import axios from "axios"

const ActivityPlanList = (props) => {

  let activity_Id="";
  const userId = "6005665ed93fdd006facc1c9";
  const handleCancel = (e) => {
  //initiate  a DELETE  to API endpoint
  activity_Id =  e.target.value.trim();
  axios
    .delete(
      `https://k2q4xg1r4e.execute-api.eu-west-2.amazonaws.com/dev/cancelPlan/${activity_Id}`
    )
    //if successful print to log for now
    .then((response) => {
      alert('Activity deleted successfully ' );
      axios .get(
        `https://k2q4xg1r4e.execute-api.eu-west-2.amazonaws.com/dev/viewPlan/${userId}`
      )
      //if successful print to log for now
      .then((response) => {
        console.log(response.data)
        props.managePlan.setPlannedActivities(response.data);
      })
    })
    //if error, log error
    .catch((error) => console.log("error = " + error));
};

    return props.plannedActivities.map((activity) => (
      <tr key={activity.activity_id}>
        <th scope="row">{activity.activity_id}</th>
        <td>{activity.activity_name}</td>
        <td>{activity.activity_schedule}</td>
        <td><button className="btn btn-info">View</button></td>
        <td>
          <Link to={`/createPlan/${activity.activity_id}`}>
        <button className="btn btn-primary">Edit</button>
        </Link>
        <button className="btn btn-info" key={activity.activity_id}
    value={activity.activity_id} onClick = {handleCancel}>Cancel</button>
        </td>
      </tr>
    ));
  };

  export default ActivityPlanList;