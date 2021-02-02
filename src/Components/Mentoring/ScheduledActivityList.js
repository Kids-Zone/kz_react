import {Link} from 'react-router-dom'
import axios from "axios"
import { useState } from 'react';

const ScheduledActivityList = (props) => {
  const userId = "6005665ed93fdd006facc1c9";
  
  const handleCancel = (e) => {
      //initiate  a DELETE  to API endpoint
      const val =  e.target.value.trim();
      const str =  val.split('@')
      let schedule_Id = str[0];
      let isActive = str[1];
      let status;
      {
      status = isActive === '0' ? true : false
      }
      const data ={"isActive": status}

      axios({
        method: 'delete',
        url:  `https://k2q4xg1r4e.execute-api.eu-west-2.amazonaws.com/dev/schedule/${schedule_Id}`,
        data: data,
        headers: {'content-type': 'application/json;charset=UTF-8'}
        })
        //if successful print to log for now
        .then((response) => {
        
          if(status){
            alert('Scheduled successfully' );
          }else{
            alert('Schedule cancelled successfully' );
          }
          
          axios .get(
            `https://k2q4xg1r4e.execute-api.eu-west-2.amazonaws.com/dev/schedule/${userId}`
          )
          //if successful print to log for now
          .then((response) => {
            console.log(response.data)
            props.manageSchedule.setActivitySchedule(response.data);
          })
        })
        //if error, log error
        .catch((error) => console.log("error = " + error)
        );
};
const handleView = (e) => {
  //initiate  a GET  to API endpoint
  const schedule_id =  e.target.value.trim();
  if(props.manageSchedule.access === 'hide'){
    props.manageSchedule.setAccess('show');
  }else{
    props.manageSchedule.setAccess('hide');
  }
  axios.get(
    `https://k2q4xg1r4e.execute-api.eu-west-2.amazonaws.com/dev/schedule/${schedule_id}`
    )
    //if successful print to log for now
    .then((response) => {
        console.log(response.data)
        props.manageSchedule.setParticipants(response.data);
     
    })
    //if error, log error
    .catch((error) => console.log("error = " + error));
};


    return props.activitySchedule.map((schedule) => (
      <tr key={schedule.schedule_id}>
        <th scope="row">{schedule.schedule_id}</th>
        <td>{schedule.activity_name}</td>
        <td>{schedule.schedule_day}</td>
        <td>{schedule.activity_type_name}</td>
        <td>{schedule.isActive === 0 ? "No": "Yes"}</td>

        <td><button className="btn btn-info" key={schedule.schedule_id}
         value={schedule.schedule_id} onClick = {handleView}>{props.manageSchedule.access === 'hide' ? 'Show':'Hide'}</button></td>
        <td>
          <Link to={`/schedule/${schedule.schedule_id}`}>
        <button className="btn btn-primary">Edit</button>
        </Link>
        {schedule.isActive === 0 && (
          <>
          <button className="btn btn-info" key={schedule.schedule_id}
          value={schedule.schedule_id + "@" + schedule.isActive}  onClick = {handleCancel}>Re-Schedule</button>
          </>
          )}
          {schedule.isActive === 1 && (
          <>
          <button className="btn btn-info" key={schedule.schedule_id}
          value={schedule.schedule_id + "@" + schedule.isActive}  onClick = {handleCancel}>Cancel</button>
          </>
        )}
        </td>
      </tr>
    ));
  };

  export default ScheduledActivityList;