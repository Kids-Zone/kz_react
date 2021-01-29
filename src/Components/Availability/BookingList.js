import Booking from './Booking'

function BookingList({ bookings, cancelBooking }) {
  return (
    <section className="Booking">
        <ul className="booking-list">
            { bookings.map(booking => 
              <booking
                id={ booking.bookingId} 
                text={ booking.description} 
                key={ booking.bookingId } 
                cancelBooking={ cancelBooking }/>)}
        </ul>
    </section>
  );
}

export default TaskList;