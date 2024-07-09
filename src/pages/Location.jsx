import Header from "../components/Header";
import Footer from "../components/Footer";
import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

function Location() {
  return (
    <Container fluid className="vh-100 d-flex flex-column ">
      <Row>
        <Col>
          <Header />
        </Col>
      </Row>

      <h1 className="my-4 text-center">Conference Location</h1>
      <Row className="mb-2 justify-content-center">
        <Col md={8}>
          <Card>
            <Card.Body>
              <Card.Title>Venue</Card.Title>
              <Card.Text>
                The React Conference 2024 will be held at the Grand Convention
                Center, located in the heart of the city. The venue is easily
                accessible by public transportation and offers a range of
                amenities to ensure a comfortable experience for all attendees.
              </Card.Text>
              <Card.Text>
                <strong>Address:</strong> 123 Main St, Cityname, Country
              </Card.Text>
              <Card.Text>
                <strong>Transportation:</strong> The venue is a 10-minute walk
                from the Central Station and is served by several bus routes.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <h2 className=" text-center">Hotel Options</h2>
      <Row className="justify-content-center">
        <Col md={4} className="mb-4 ">
          <Card>
            <Card.Body>
              <Card.Title>Hotel One</Card.Title>
              <Card.Text>
                A luxurious hotel located just a 5-minute walk from the venue,
                offering excellent amenities and services.
              </Card.Text>
              <Card.Text>
                <strong>Address:</strong> 456 Hotel Lane, Cityname, Country
              </Card.Text>
              <Card.Text>
                <strong>Phone:</strong> (123) 456-7890
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="mb-4">
          <Card>
            <Card.Body>
              <Card.Title>Hotel Two</Card.Title>
              <Card.Text>
                A budget-friendly hotel situated within walking distance of the
                venue, offering comfort and convenience.
              </Card.Text>
              <Card.Text>
                <strong>Address:</strong> 789 Budget Rd, Cityname, Country
              </Card.Text>
              <Card.Text>
                <strong>Phone:</strong> (123) 555-6789
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

export default Location;
