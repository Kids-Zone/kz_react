import React ,{useEffect, useState } from "react";
import { Container, Col, Row, Form, Button } from "react-bootstrap";
import {Link} from 'react-router-dom';
import axios from "axios";

const ScheduleActivity = (props) => {
  const activity_Id=props.match.params.id;
  const [activitySchedule ,setActivitySchedule] =useState([]);  
  const userId= '6005665ed93fdd006facc1c9';
  const initialFormData = Object.freeze({
    // auth0Id: localStorage.getItem('userId'),
    user_id: '6005665ed93fdd006facc1c9',
    
  });
  const [formData, updateFormData] = useState(initialFormData);

 useEffect(() => {
    //initiate  a GET  to API endpoint
    axios
      .get(
        `https://k2q4xg1r4e.execute-api.eu-west-2.amazonaws.com/dev/allActivity`
      )
      //if successful print to log for now
      .then((response) => {
        console.log(response.data)
        setActivitySchedule(response.data)
      })
      //if error, log error
      .catch((error) => console.log("error = " + error));
  }, []);

  useEffect(() => {
    //initiate  a GET  to API endpoint
    if(activity_Id !=null && activity_Id != "new"){
    axios
      .get(
        `https://k2q4xg1r4e.execute-api.eu-west-2.amazonaws.com/dev/Activity/${activity_Id}`
      )
      //if successful print to log for now
      .then((response) => {
        console.log(response.data)
        updateFormData(response.data)
      })
      //if error, log error
      .catch((error) => console.log("error = " + error));
  }
}, []);

  const handleChange = (e) => {
    updateFormData({
      ...formData,

      // Trimming any whitespace
      [e.target.name]: e.target.value.trim()
    });
  };

  const handleSave = (e) => {
    e.preventDefault()
      //initiate  a POST  to API endpoint
      axios({
        method: 'post',
        url: 'https://k2q4xg1r4e.execute-api.eu-west-2.amazonaws.com/dev/schedule',
       
        data: formData,
        headers: {'content-type': 'application/json;charset=UTF-8'}
        })
        //if successful print to log for now
        .then((response) => {
          console.log(response.data)
          alert('Activity scheduled successfully ' );
        })
        //if error, log error
        .catch((error) => console.log("error = " + error));
    
  };
  
  const handleEdit = (e) => {
    e.preventDefault()
 
      //initiate  a PUT  to API endpoint
      axios({
        method: 'put',
        url: `https://k2q4xg1r4e.execute-api.eu-west-2.amazonaws.com/dev/createPlan/${activity_Id}`,
       
        data: formData,
        headers: {'content-type': 'application/json;charset=UTF-8' }
        })
        //if successful print to log for now
        .then((response) => {
          console.log(response.data)
          alert('Activity updated successfully ' );
        })
        //if error, log error
        .catch((error) => console.log("error = " + error));
  };
  
  

  return (
    <>
  
      <Container>
        <Row>
          <Col>
            <h2>Schedule Activity</h2>
            <br></br>
            <Form>
              <Form.Group>
             
              <Form.Row>
              <Col>
               <Form.Label>Title</Form.Label>
               </Col>
               <Col>
               <Form.Control as="select" name='activity_id' onChange ={handleChange}>
                 <option>Choose...</option>
                 {activitySchedule.map((activity) => (

                      <option value={activity.activity_id}>{activity.activity_name}</option>

                      ))
                
                 }
               </Form.Control>
               </Col>
            
           </Form.Row>
           <Form.Row>
              <Col>
               <Form.Label>Schedule</Form.Label>
               </Col>
               <Col>
               <Form.Control as="select" name='schedule_day'  onChange ={handleChange}>
                 <option>Choose...</option>
                 <option value="Monday" >Monday</option>
                 <option value="Tuesday" >Tuesday</option>
                 <option value="Wednesday" >Wednesday</option>
                 <option value="Thursday" >Thurday</option>
                 <option value="Friday" >Friday</option>
               </Form.Control>
               </Col>   
           </Form.Row>
           <Form.Row>
                <Col>
                    <Form.Label>Start Date</Form.Label>
                </Col>
                <Col>
                    <Form.Control name='start_date' placeholder="Enter start date for activity" onChange ={handleChange}/>
                </Col>
              </Form.Row>
              <Form.Row>
                <Col>
                    <Form.Label>End Date</Form.Label>
                </Col>
                <Col>
                    <Form.Control name='end_date'  placeholder="Enter end date for activity" onChange ={handleChange}/>
                </Col>
              </Form.Row>
           <Form.Row>
                <Col>
                    <Form.Label>Slots</Form.Label>
                </Col>
                <Col>
                    <Form.Control name='slots'  placeholder="Enter no of slots per day." onChange ={handleChange}/>
                </Col>
            </Form.Row>
            <Form.Row>
                <Col>
                    <Form.Label>Slot Duration</Form.Label>
                </Col>
                <Col>
                    <Form.Control name='slots_duration' placeholder="Enter slot duration in hour."  onChange ={handleChange}/>
                </Col>
              </Form.Row>
              <Form.Row>
                <Col>
                    <Form.Label>Publish</Form.Label>
                </Col>
                <Col>
                <Form.Control as="select" name='isActive' onChange ={handleChange}>
                 <option>Choose...</option>
                 <option value="true" >Yes</option>
                 <option value="false" >No</option>
               </Form.Control>
                </Col>
              </Form.Row>
              </Form.Group>
              <Button class="button btn btn-primary" onClick = {handleSave}>Save</Button>
              <Button class="button btn btn-primary" onClick = {handleEdit}>Update</Button>
              <Link to={`/availability`}>
              <Button class="button btn btn-info">My Schedule</Button>
              </Link>
            </Form>
            
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ScheduleActivity;
