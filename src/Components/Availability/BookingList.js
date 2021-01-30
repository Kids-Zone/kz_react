import {Link} from 'react-router-dom'
import Booking from './Booking'

/* function BookingList({ bookings, cancelbooking}) {
  return (
    <section className="Welcome">
        <h2 className="heading">Activities Booked</h2>
        <ul className="booking-list">
            { bookings.map(booking => 
              <booking 
                id={ booking.taskId} 
                activity={ booking.activityName} 
                schedule={ booking.schedule } 
                cancelbooking={ cancelbooking }/>)}
        </ul>
    </section>
  );
} */

const BookingList = (props) => {
  return props.BookedActivities.map((activity) => (
    <tr>
      <th scope="row">{activity.activity_id}</th>
      <td>{activity.activity_name}</td>
      <td>{activity.activity_schedule}</td>
      <td><button className="btn btn-info">View</button></td>
      <td>
      <Link to="/cancelActivity" >
      <button className="btn btn-info">Cancel</button>
      </Link>
      </td>
    </tr>
  ));
};
export default BookingList;