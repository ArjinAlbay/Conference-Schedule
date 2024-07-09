import Header from "../components/Header";
import Footer from "../components/Footer";
import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

function Foods() {
  return (
    <Container fluid className="vh-100 d-flex flex-column text-center">
      <Row>
        <Col>
          <Header />
        </Col>
      </Row>

      <h1 className="my-4">Food Options</h1>

      <Row className="mb-4 justify-content-center">
        <Col md={8}>
          <Card>
            <Card.Body>
              <Card.Title>Buffet Lunch</Card.Title>
              <Card.Text>
                Enjoy a variety of dishes at our buffet lunch, featuring both
                local and international cuisines. Vegetarian and vegan options
                will be available.
              </Card.Text>
              <Card.Text>
                <strong>Time:</strong> 12:00 PM - 2:00 PM
              </Card.Text>
              <Card.Text>
                <strong>Location:</strong> Main Dining Hall
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="mt-auto">
        <Col>
          <Footer />
        </Col>
      </Row>
    </Container>
  );
}

export default Foods;
