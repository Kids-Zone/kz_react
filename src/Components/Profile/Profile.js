import React from "react";
import {
  Container,
  Row,
  Jumbotron,
  Card,
  CardDeck,
} from "react-bootstrap";
import { Link } from "react-router-dom";


function Profile() {
  const user =localStorage.getItem('username');
  return (
    <>
      <Container>
        <Jumbotron
          style={{ height: "2px" , backgroundColor : "rgb(196, 180, 37)"}}
          className="jumbotrona text-light "
        >
          <h3>Welcome! { user} </h3>
          
        </Jumbotron>
      </Container>
          <Container className={"mb-1"}>
          <p>
            All mentors will be satisfied with our club educational
            environment, and most of our mentor grow their skill by mentoring
            our club kids.
          </p>
     
        <Row>
          <CardDeck>
          <Card>
              <Card.Img className ="profile-image" variant="top" src="https://www.zynbit.com/wp-content/uploads/2019/06/automated-scheduling-featured-image-1.jpg" />
              <Card.Body>
              <Link to={`/createPlan`}>
                <Card.Title>Plan</Card.Title>
                </Link>
                <Card.Text>You can plan activities here</Card.Text>
              </Card.Body>
            </Card>
            
		        <Card>
              <Card.Img variant="top" src="https://pebbledesign.com/images/insights/headings/booking-direct.png" />
              <Card.Body>
                  <Link to={`/availability`}>
                <Card.Title>My Planner</Card.Title>
                </Link>
                <Card.Text>
                View all your planned activities
                </Card.Text>
               
              </Card.Body>
            </Card>
           
            <Card>
              <Card.Img className="card-img-top" variant="top" src="https://asanastatic.s3.amazonaws.com/020fe1.png" />
              <Card.Body>
              <Link to={`/managePlan`}>
                <Card.Title>Manage</Card.Title>
                </Link>
                <Card.Text>
                 Manage your plan
                </Card.Text>
              </Card.Body>
            </Card>
		 
          </CardDeck>
        </Row>
      </Container>
    </>

	

  );
}

export default Profile;
