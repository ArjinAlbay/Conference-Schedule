import React, { useEffect, useState } from "react";
import { generateMockSpeakers } from "../data/MockData";
import { Container, Row, Col, Card } from "react-bootstrap";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Speakers() {
  const [speakers, setspeakers] = useState([]);

  useEffect(() => {
    const data = generateMockSpeakers(3);

    setspeakers(data);
  }, []);

  return (
    <Container fluid className="vh-100 d-flex flex-column text-center">
      <Row>
        <Col>
          <Header />
        </Col>
      </Row>
      <h1 className="my-4">Speakers</h1>
      <Row className="flex-grow-1 gap-2 justify-content-center align-items-center ">
        {speakers.map((speaker, index) => (
          <Col md={2} className="mb-4" key={index}>
            <Card style={{ width: "10rem" }}>
              <Card.Img variant="top" src={speaker.image} alt={speaker.name} />
              <Card.Body>
                <Card.Title>{speaker.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  {speaker.title}
                </Card.Subtitle>
                <Card.Text>{speaker.bio}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <Row className="mt-auto">
        <Col>
          <Footer />
        </Col>
      </Row>
    </Container>
  );
}

export default Speakers;
