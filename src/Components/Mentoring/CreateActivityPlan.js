import React from "react";
import { Container, Col, Row, Form, Button } from "react-bootstrap";
import "./Mentor.css";
import {Link} from 'react-router-dom'

const CreateActivityPlan = () => {
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
                    <Form.Control placeholder="Activity Name"></Form.Control>
                  </Col>
                </Form.Row>
                <Form.Row>
                <Col>
                  <Form.Label className ="labeltext">Summary</Form.Label>
                  </Col>
                  <Col>
                  <Form.Control placeholder="Enter Summary" />
                </Col>
                </Form.Row>
                <Form.Row>
                <Col>
                    <Form.Label>Description</Form.Label>
                </Col>
                <Col>
                    <Form.Control placeholder="Enter Description"/>
                </Col>
              </Form.Row>
              <Form.Row>
              <Col>
               <Form.Label>Type</Form.Label>
               </Col>
               <Col>
               <Form.Control as="select">
                 <option>Choose...</option>
                 <option>Online</option>
                 <option>Premise</option>
               </Form.Control>
               </Col>
            
           </Form.Row>
           <Form.Row>
              <Col>
               <Form.Label>Schedule</Form.Label>
               </Col>
               <Col>
               <Form.Control as="select">
                 <option>Choose...</option>
                 <option>Weekly</option>
                 <option>Monthly</option>
               </Form.Control>
               </Col>   
           </Form.Row>
           <Form.Row>
                <Col>
                    <Form.Label>Start Date</Form.Label>
                </Col>
                <Col>
                    <Form.Control placeholder="Enter start date for activity"/>
                </Col>
              </Form.Row>
              <Form.Row>
                <Col>
                    <Form.Label>End Date</Form.Label>
                </Col>
                <Col>
                    <Form.Control placeholder="Enter end date for activity"/>
                </Col>
              </Form.Row>
           <Form.Row>
                <Col>
                    <Form.Label>Slots</Form.Label>
                </Col>
                <Col>
                    <Form.Control placeholder="Enter no of slots per day."/>
                </Col>
            </Form.Row>
            <Form.Row>
                <Col>
                    <Form.Label>Slot Duration</Form.Label>
                </Col>
                <Col>
                    <Form.Control placeholder="Enter slot duration in hour."/>
                </Col>
              </Form.Row>
              <Form.Row>
                <Col>
                    <Form.Label>Max Participants</Form.Label>
                </Col>
                <Col>
                    <Form.Control placeholder="Enter no of participants per slot"/>
                </Col>
              </Form.Row>
              </Form.Group>
              <Button class="button btn btn-primary">Save</Button>
              <Button class="button btn btn-primary">Edit</Button>
              <Button class="button btn btn-info">Cancel</Button>
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
