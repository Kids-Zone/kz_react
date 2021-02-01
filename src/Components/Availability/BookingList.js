import ActivityAPI from "../../services/activity-api";

const BookingList = (props) => {

  return props.BookedActivities.map((activity) => (
    <tr>
      <th scope="row"></th>
      <td>Booking Id = {activity.booking_id}</td>
      <td>{activity.activity_name}</td>
      <td>{activity.activity_schedule}</td>
      <td>
        <button onClick={() => {props.deleteBooking(activity.booking_id)}} class="btn btn-warning">Delete booking</button>
      </td>
    </tr>
  ));
};
export default BookingList;
