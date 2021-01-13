import React from "react";
import { Container, Col, Row, Form, Button } from "react-bootstrap";

const Register = () => {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <h1>Sign up </h1>
            <br></br>
            <Form>
              <Form.Group>
                <Form.Label>Name</Form.Label>
                <Form.Row>
                  <Col>
                    <Form.Control placeholder="First Name"></Form.Control>
                  </Col>
                  <Col>
                    <Form.Control placeholder="Last Name"></Form.Control>
                  </Col>
                </Form.Row>
              </Form.Group>
              <Form.Row>
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="Enter Email" />
                </Form.Group>
                <Form.Group as={Col} controlId="formGridTel">
                  <Form.Label>Telephone</Form.Label>
                  <Form.Control
                    type="telephone"
                    placeholder="Enter Phone Number"
                  />
                </Form.Group>
              </Form.Row>
              <Form.Group controlId="formGridAddress1">
                <Form.Label>Address</Form.Label>
                <Form.Control placeholder="1234 Main St" />
              </Form.Group>
              <Form.Group controlId="formGridAddress2">
                <Form.Label>Address 2</Form.Label>
                <Form.Control placeholder="Apartment #" />
              </Form.Group>
              <Form.Row>
                <Form.Group as={Col} controlId="formGridCity">
                  <Form.Label>City</Form.Label>
                  <Form.Control />
                </Form.Group>
                <Form.Group as={Col} controlId="formGridState">
                  <Form.Label>County</Form.Label>
                  <Form.Control as="select">
                    <option>Choose...</option>
                    <option>Lancashire</option>
                    <option>City of London</option>
                  </Form.Control>
                </Form.Group>
                <Form.Group as={Col} controlId="formGridCityZip">
                  <Form.Label>Post Code</Form.Label>
                  <Form.Control />
                </Form.Group>
              </Form.Row>
              <Form.Row>
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group as={Col} controlId="formGridTel">
                  <Form.Label>Re-Ennter Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Re-Enter Password"
                  />
                </Form.Group>
              </Form.Row>
              <Button variant="primary" type="submit" className="btn-sm">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Register;
