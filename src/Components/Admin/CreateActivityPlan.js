import React ,{useEffect, useState } from "react";
import { Container, Col, Row, Form, Button } from "react-bootstrap";
import {Link} from 'react-router-dom';
import axios from "axios";

const CreateActivityPlan = (props) => {
  const activity_Id=props.match.params.id;
  const initialFormData = Object.freeze({
    // auth0Id: localStorage.getItem('userId'),
    auth0Id: '6005665ed93fdd006facc1c9',
    
  });
  const [formData, updateFormData] = useState(initialFormData);

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
        url: 'https://k2q4xg1r4e.execute-api.eu-west-2.amazonaws.com/dev/createPlan',
       
        data: formData,
        headers: {'content-type': 'application/json;charset=UTF-8'}
        })
        //if successful print to log for now
        .then((response) => {
          console.log(response.data)
          alert('Activity planned successfully ' );
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
            <h1>Plan Activity</h1>
            <br></br>
            <Form>
              <Form.Group>
                <Form.Row>
                  <Col>
                    <Form.Label className ="labeltext">Title</Form.Label>
                  </Col>
                  <Col>
                    <Form.Control name='activity_name' value={formData[0]!=null ? formData[0].activity_name : ''} placeholder="Activity Name"   onChange ={handleChange}></Form.Control>
                  </Col>
                </Form.Row>
                <Form.Row>
                <Col>
                  <Form.Label className ="labeltext">Summary</Form.Label>
                  </Col>
                  <Col>
                  <Form.Control name='activity_summary' value={formData[0]!=null ? formData[0].activity_summary : ''} placeholder="Enter Summary" onChange ={handleChange} />
                </Col>
                </Form.Row>
                <Form.Row>
                <Col>
                    <Form.Label>Description</Form.Label>
                </Col>
                <Col>
                    <Form.Control name='activity_details' value={formData[0]!=null ? formData[0].activity_details : ''} placeholder="Enter Description" onChange ={handleChange}/>
                </Col>
              </Form.Row>
              <Form.Row>
              <Col>
               <Form.Label>Type</Form.Label>
               </Col>
               <Col>
               <Form.Control as="select" name='activity_type_id' value={formData[0]!=null ? formData[0].activity_type_id : ''} onChange ={handleChange}>
                 <option>Choose...</option>
                 <option value="1">Online</option>
                 <option value="2">Premise</option>
               </Form.Control>
               </Col>
            
           </Form.Row>
           <Form.Row>
              <Col>
               <Form.Label>Schedule</Form.Label>
               </Col>
               <Col>
               <Form.Control as="select" name='activity_schedule' value={formData[0]!=null ? formData[0].activity_schedule : ''} onChange ={handleChange}>
                 <option>Choose...</option>
                 <option value="Monday to Friday" >Weekly</option>
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
                    <Form.Control name='slot_duration' placeholder="Enter slot duration in hour."  onChange ={handleChange}/>
                </Col>
              </Form.Row>
              <Form.Row>
                <Col>
                    <Form.Label>Max Participants</Form.Label>
                </Col>
                <Col>
                    <Form.Control name='max_occupancy' value={formData[0]!=null ? formData[0].max_occupancy : ''} placeholder="Enter no of participants per slot" onChange ={handleChange}/>
                </Col>
              </Form.Row>
              </Form.Group>
              <Button class="button btn btn-primary" onClick = {handleSave}>Save</Button>
              <Button class="button btn btn-primary" onClick = {handleEdit}>Edit</Button>
              <Link to={`/availability`}>
              <Button class="button btn btn-info">My Planner</Button>
              </Link>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default CreateActivityPlan;
