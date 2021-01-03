import React from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Col,
  Row,
  Jumbotron,
  Button,
  Card,
  CardDeck,
} from "react-bootstrap";
import Background from "../../images/mentoring-bg-img.png";
import MotivatedImg from "../../images/motivated-learner.png";
import Freedom from "../../images/freedom.png";
import Creative from "../../images/creative.png";
const Teaching = () => {
  return (
    <>
      <Container fluid style={{ backgroundImage: `url(${Background})` }}>
        <Jumbotron
          style={{ height: "30vh" }}
          className="jumbotrona text-light bg-transparent"
        >
          <h1>Join our community and teach brilliant kids</h1>

          <p>
            All teachers will be satisfied with our club educational
            environment, and most of our teacher grow their skill by teaching
            our club kids.
          </p>
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
                  You can join us to teach according to your available time.
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
                <Card.Text>
                  You can come to our club and teach on your available time.
                </Card.Text>
              </Card.Body>
            </Card>
          </CardDeck>
          <Link to="/register">
            <Button variant="success" className="btn-lg">
              Join Us
            </Button>
          </Link>
        </Row>
      </Container>
    </>
  );
};

export default Teaching;
