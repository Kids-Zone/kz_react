import { Link } from "react-router-dom";
import Booking from "./Booking";

const BookingList = (props) => {
  return props.BookedActivities.map((activity) => (
    <tr>
      <th scope="row"></th>
      <td>ID = {activity.activity_id}</td>
      <td>{activity.activity_name}</td>
      <td>{activity.activity_schedule}</td>
      <td>
        <Link to="/cancelActivity">
          <button className="btn btn-info">Cancel</button>
        </Link>
      </td>
    </tr>
  ));
};
export default BookingList;
