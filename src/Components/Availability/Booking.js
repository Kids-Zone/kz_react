//[{"booking_id":1,"activity_id":"3","user_id":"60055c859ee88b00776dc57f","activity_name":"Drumming",
//"activity_schedule":"Monday & Wednesday","activity_type_name":"Premise"}]

function Booking({id, bookingId, userId, activityName, schedule, cancelbooking}){
    return (
        <li className="booking">
            <p className="activity_text">{ activityName }</p>
            <p className="schedule">{ schedule }</p>
            <button onClick={ () => cancelbooking(bookingId) } className="button">Cancel</button>
        </li>
      );
}
export default Booking;