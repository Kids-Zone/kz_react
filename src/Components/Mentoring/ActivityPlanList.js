import {Link} from 'react-router-dom'

const ActivityPlanList = (props) => {
    return props.plannedActivities.map((activity) => (
      <tr>
        <th scope="row">{activity.activity_id}</th>
        <td>{activity.activity_name}</td>
        <td>{activity.activity_schedule}</td>
        <td><button className="btn btn-info">View</button></td>
        <td>
          <Link to="/createPlan">
        <button className="btn btn-primary">Edit</button>
        </Link>
        <Link to="/createPlan" >
        <button className="btn btn-info">Cancel</button>
        </Link>
        </td>
      </tr>
    ));
  };

  export default ActivityPlanList;