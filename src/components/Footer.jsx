import React from "react";
import { Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <Row className="bg-light mt-auto text-dark text-center">
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
    </Row>
  );
};

export default Footer;
