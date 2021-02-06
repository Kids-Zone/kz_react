const BookingList = (props) => {
  const rows = props.bookedActivities.map((activity) => (
    <div class="row align-items-center activity-row">
      <div class="col">{activity.booking_id}</div>
      <div class="col">{activity.activity_name}</div>
      <div class="col">{activity.activity_schedule}</div>
      <div class="col-sm">
        <button
          onClick={() => {
            props.deleteBooking(activity.booking_id);
          }}
          class="btn btn-warning"
        >
          Delete booking
        </button>
      </div>
    </div>
  ));

  return <div class="container">{rows}</div>;
};
export default BookingList;
