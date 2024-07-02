import Header from "../components/Header";
import Footer from "../components/Footer";
import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

import Cards from "../components/Cards";
import { Link } from "react-router-dom";

function Homepage() {
  return (
    <Container fluid className="vh-100 d-flex flex-column">
      {/********** HEADER *********** */}
      <Row>
        <Col>
          <Header />
        </Col>
      </Row>
      {/********** CONTENT *********** */}
      <Row className="flex-grow-1 mt-2 p-4 justify-content-center text-center">
        <Col xs={6}>
          <h1>The React Conference 2024!</h1>
          <p>
            Welcome to the React Conference 2024! Our event is packed with
            insightful sessions and engaging speakers to help you elevate your
            React skills. Here's a sneak peek at our conference schedule:
          </p>

          <Button as={Link} to="/location">
            Location
          </Button>
          <Button as={Link} to="/foods">
            Foods
          </Button>
          <Button as={Link} to="/conduct">
            Conducts Page
          </Button>
          <Button as={Link} to="/schedule">
            Schedule
          </Button>
          <Button as={Link} to="/speakers">
            Speakers
          </Button>
        </Col>
      </Row>

      {/********** CARDS *********** */}

      <Row className="flex-grow-1 gap-2 justify-content-center align-items-center ">
        {[1, 2, 3, 4, 5, 6].map((index) => (
          <Col key={index} md={3}>
            <Cards></Cards>
          </Col>
        ))}
      </Row>
      {/********** FOOTER *********** */}
      <Row>
        <Col>
          <Footer />
        </Col>
      </Row>
    </Container>
  );
}

export default Homepage;
