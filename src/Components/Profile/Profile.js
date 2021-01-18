import React from "react";
import {
  Container,
  Row,
  Jumbotron,
  Card,
  CardDeck,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";


function Profile() {
//   const { user } = useAuth0();
// const {role} =props.match.params.role;
  return (
    <>
      <Container>
        <Jumbotron
          style={{ height: "30vh" , backgroundColor : "rgb(196, 180, 37)"}}
          className="jumbotrona text-light "
        >
          <h1>Welcome! User</h1>

          {/* <p>
            All teachers will be satisfied with our club educational
            environment, and most of our teacher grow their skill by teaching
            our club kids.
          </p> */}
        </Jumbotron>
      </Container>
      {/* {
        {role} === "ch" &&( */}
          <Container className={"mb-1"}>
        <Row>
          <CardDeck>
          <Card>
              <Card.Img className ="profile-image" variant="top" src="https://www.evolutioninfosystem.com/wp-content/uploads/2019/09/open247-for-booking.png" />
              <Card.Body>
              <Link to={`/kidsavailability`}>
                <Card.Title>Book</Card.Title>
                </Link>
                <Card.Text>You can book your activities here</Card.Text>
              </Card.Body>
            </Card>
            
		        <Card>
              <Card.Img variant="top" src="https://pebbledesign.com/images/insights/headings/booking-direct.png" />
              <Card.Body>
                  <Link to={`/kidsavailability`}>
                <Card.Title>My Bookings</Card.Title>
                </Link>
                <Card.Text>
                  View all your booked activities
                </Card.Text>
               
              </Card.Body>
            </Card>
           
            <Card>
              <Card.Img className="card-img-top" variant="top" src="https://asanastatic.s3.amazonaws.com/020fe1.png" />
              <Card.Body>
              <Link to={`/kidsavailability`}>
                <Card.Title>Manage</Card.Title>
                </Link>
                <Card.Text>
                 Manage your Bookings
                </Card.Text>
              </Card.Body>
            </Card>
		 
          </CardDeck>
        </Row>
      </Container>
        {/* )
      }
       {
        {role} === "me" &&( */}
      <Container className={"mb-1"}>
        <Row>
          <CardDeck>
          <Card>
              <Card.Img className ="profile-image" variant="top" src="https://www.expertum.net/hubfs/plan-dice-760.jpg" />
              <Card.Body>
              <Link to={`/availability`}>
                <Card.Title>Plan</Card.Title>
                </Link>
                <Card.Text>You can Plan activities here</Card.Text>
              </Card.Body>
            </Card>
            
		        <Card>
              <Card.Img variant="top" src="https://www.zynbit.com/wp-content/uploads/2019/06/automated-scheduling-featured-image-1.jpg" />
              <Card.Body>
                  <Link to={`/classes`}>
                <Card.Title>My Planner</Card.Title>
                </Link>
                <Card.Text>
                  View all your planned activities
                </Card.Text>
               
              </Card.Body>
            </Card>
           
            <Card>
              <Card.Img className="card-img-top" variant="top" src="https://www.signupgenius.com/cms/images/blog/appointment-scheduling-blog-810x405.png" />
              <Card.Body>
              <Link to={`/availability`}>
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
      {/* )} */}
    </>

	

  );
}

export default Profile;
