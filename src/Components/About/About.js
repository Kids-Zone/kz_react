import "./About.css";
import { useHistory } from "react-router-dom";
import {
  Container,
  Row,
  Jumbotron,
  Card,
  CardDeck,
} from "react-bootstrap";
import { Link } from "react-router-dom";


function About() {
  const history = useHistory();

  return (
    <div className="container">
      <div className="banner">
        <h3>Who we are</h3>
      </div>
      <div className="content">
        <p>
          KidsZone is a safe space where you can learn and have fun. It is a educational and engaging club for children
          that from 8-15 yrs.
        </p>
      </div>
      <div className="banner">
        <h4>
          As we are currently in <b>lockdown</b> all classes where possible are
          now offered online.
        </h4>
      </div>
      <div><p></p></div>
      <div className="banner">
        <h3>What we offer</h3>
      </div>
      <div className="content">
        <p>
          {" "}
          We've a great space for you to enjoy you can drop in and have chat
          with friends, listen to some music in the communal area. There's also
          table tennis and pool tables with no booking required. We've lots of
          classes to join, if you can't make it to the club there's also range
          of activities available online. Please drop in and see what we have to
          offer!
        </p>
      </div>
      <Container className={"mb-1"}>
        <Row>
          <CardDeck>
          <Card>
              <Card.Img className ="profile-image online-dance-img" variant="top"  />
              <Card.Body>
              <Link to={`/activities?category=online`}>
              <button className="button btn btn-info">Read More</button>
                </Link>
                <Card.Text>You can view all online activities here</Card.Text>
              </Card.Body>
            </Card>
            
		        <Card>
              <Card.Img className ="profile-image premise-drummer-img" variant="top"  />
              <Card.Body>
              <Link to={`/activities?category=premise`}>
              <button className="button btn btn-info">Read More</button>
                </Link>
                <Card.Text>
                You can view all premise activities here
                </Card.Text>
               
              </Card.Body>
            </Card>
  
          </CardDeck>
        </Row>
      </Container>

      <div className="banner">
        <h3>Want to Mentor</h3>
      </div>
      <div className="content">
        <p>
          If you wish to be a mentor then we can offer many opportunities.
          Either online teaching or mentoring at the club. All our teachers are
          CRB/DBS checked and fully qualified in their field.{" "}
        </p>
        <p>
          All classes have a maximum occupancy limit based on category and
          available resources. You can plan the activities based on your
          schedule and publish availability.
        </p>
      </div>
      <Container className={"mb-1"}>
        <Row>
          <CardDeck>
          <Card>
              <Card.Img className ="profile-image mentor-img" variant="top"  />
              <Card.Body>
              <Link to={`/mentoring`}>
                <button className="button btn btn-info">Read More</button>
                </Link>
                <Card.Text>You can explore mentoring options here</Card.Text>
              </Card.Body>
            </Card>
          </CardDeck>
        </Row>
      </Container>
    </div>
  );
}
export default About;
