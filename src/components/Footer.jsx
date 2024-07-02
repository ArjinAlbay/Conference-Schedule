import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <Container fluid className="bg-light text-dark mt-3 text-center">
      <Row>
        <Col>
          <p>
            &copy; {new Date().getFullYear()} React Conference. All rights
            reserved.
          </p>
        </Col>
      </Row>
      <Row>
        <Col>
          <a href="#" className="text-dark me-3">
            Privacy Policy
          </a>
          <a href="#" className="text-dark">
            Terms of Service
          </a>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
