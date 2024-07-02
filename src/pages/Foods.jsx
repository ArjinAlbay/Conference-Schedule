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

      <Row className="mb-4 justify-content-center">
        <Col md={5}>
          <Card>
            <Card.Body>
              <Card.Title>Snack Bar</Card.Title>
              <Card.Text>
                Grab a quick snack between sessions at our snack bar. Options
                include sandwiches, salads, fruit, and a selection of beverages.
              </Card.Text>
              <Card.Text>
                <strong>Time:</strong> 10:00 AM - 4:00 PM
              </Card.Text>
              <Card.Text>
                <strong>Location:</strong> Lobby Area
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={5}>
          <Card>
            <Card.Body>
              <Card.Title>Food Trucks</Card.Title>
              <Card.Text>
                Explore a variety of cuisines from local food trucks parked
                outside the venue. From gourmet burgers to authentic tacos,
                there's something for everyone.
              </Card.Text>
              <Card.Text>
                <strong>Time:</strong> 11:00 AM - 3:00 PM
              </Card.Text>
              <Card.Text>
                <strong>Location:</strong> Outdoor Courtyard
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="mb-4 justify-content-center">
        <Col md={5}>
          <Card>
            <Card.Body>
              <Card.Title>Coffee and Tea Station</Card.Title>
              <Card.Text>
                Keep yourself energized with our all-day coffee and tea station.
                A selection of pastries and snacks will also be available.
              </Card.Text>
              <Card.Text>
                <strong>Time:</strong> 9:00 AM - 5:00 PM
              </Card.Text>
              <Card.Text>
                <strong>Location:</strong> Exhibition Hall
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col>
          <Footer />
        </Col>
      </Row>
    </Container>
  );
}

export default Foods;
