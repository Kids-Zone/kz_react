import React from "react";
import {
  Container,
  Row,
  Jumbotron,
  Button,
  Card,
  CardDeck,
} from "react-bootstrap";
import MotivatedImg from "../../images/motivated-learner.png";
import Freedom from "../../images/freedom.png";
import Creative from "../../images/creative.png";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";

const Mentoring = () => {
  const { loginWithRedirect } = useAuth0();
  const { isAuthenticated } = useAuth0();
  return (
    <>
      <Container>
        <Jumbotron
          style={{ height: "30vh" , backgroundColor : "rgb(196, 180, 37)"}}
          className="jumbotrona text-light "
        >
          <h1>Join our community and teach brilliant kids</h1>

          {/* <p>
            All teachers will be satisfied with our club educational
            environment, and most of our teacher grow their skill by teaching
            our club kids.
          </p> */}
        </Jumbotron>
      </Container>
      <Container className={"mb-1"}>
        <Row>
          <CardDeck>
            <Card>
              <Card.Img variant="top" src={MotivatedImg} />
              <Card.Body>
                <Card.Title>Teach online</Card.Title>
                <Card.Text>
                  You can join us to mentor according to your availability.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card>
              <Card.Img className="card-img-top" variant="top" src={Creative} />
              <Card.Body>
                <Card.Title>Be Creative</Card.Title>
                <Card.Text>
                  Design your curriculum and teach the way you want.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card>
              <Card.Img variant="top" src={Freedom} />
              <Card.Body>
                <Card.Title>Teach on premises</Card.Title>
                <Card.Text>You can come to our club and teach.</Card.Text>
              </Card.Body>
            </Card>
          </CardDeck>
          {!isAuthenticated && ( <Button variant="success" className="button btn btn-info"  onClick={() => loginWithRedirect()}>
              Join Us
            </Button>)}
           {isAuthenticated && (<Link to={`/mentorProfile`}> <Button variant="success" className="button btn btn-info" >
              Join Us
            </Button></Link>)}
         
            
        </Row>
      </Container>
    </>
  );
};

export default Mentoring;
