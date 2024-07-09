import Header from "../components/Header";
import Footer from "../components/Footer";
import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { generateMockConduct } from "../data/MockData";
function Conduct() {
  const [conducts, setConducts] = useState([]);

  useEffect(() => {
    const data = generateMockConduct(2);

    setConducts(data);
  }, []);

  return (
    <Container fluid className="vh-100 d-flex flex-column text-center">
      <Row>
        <Col>
          <Header />
        </Col>
      </Row>
      <h1 className="my-4 text-center">Code of Conduct</h1>
      {conducts.map((conductItem, index) => {
        return (
          <Row className="mb-4 text-center justify-content-center" key={index}>
            <Col md={8}>
              <Card>
                <Card.Body>
                  <Card.Title>{conductItem.title}</Card.Title>
                  <Card.Text>{conductItem.paragraph}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        );
      })}

      <Row className="mt-auto">
        <Col>
          <Footer />
        </Col>
      </Row>
    </Container>
  );
}

export default Conduct;
