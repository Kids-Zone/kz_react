
function Booking({id, bookingId, userId, activityName, schedule, type}){
    return (
        <li className={`activity`}>
            <p className="activity_text">{ activityName }</p>
            <button onClick={ () => cancelActivity(bookingId) } className="button">Cancel</button>
        </li>
      );
}

export default Booking;