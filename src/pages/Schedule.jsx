import Header from "../components/Header";
import Footer from "../components/Footer";
import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { generateMockSchedule } from "../data/MockData";

function Schedule() {
  const [schedule, setSchedule] = useState([]);

  useEffect(() => {
    const data = generateMockSchedule(4);

    setSchedule(data);
  }, []);

  return (
    <Container fluid className="vh-100 d-flex flex-column text-center">
      <Row>
        <Col>
          <Header />
        </Col>
      </Row>
      <h1 className="my-4">Conference Schedule</h1>
      {/* Day 1 */}
      <h2 className="mb-4">Day 1</h2>
      {schedule.map((event, index) => (
        <Row className="mb-4" key={index}>
          <Col>
            <Card>
              <Card.Body>
                <Card.Title>
                  {event.time}-{event.title}
                </Card.Title>
                <Card.Text>
                  Choose from a variety of sessions covering advanced React
                  topics, state management, and more.
                </Card.Text>
                <Card.Text>
                  <strong>Speaker:</strong> {event.speaker}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      ))}

      {/* Day 2 */}
      <h2 className="mb-4">Day 2</h2>
      {schedule.map((event, index) => (
        <Row className="mb-4" key={index}>
          <Col>
            <Card>
              <Card.Body>
                <Card.Title>
                  {event.time}-{event.title}
                </Card.Title>
                <Card.Text>
                  Choose from a variety of sessions covering advanced React
                  topics, state management, and more.
                </Card.Text>
                <Card.Text>
                  <strong>Speaker:</strong> {event.speaker}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      ))}

      <Row className="mt-auto">
        <Col>
          <Footer />
        </Col>
      </Row>
    </Container>
  );
}

export default Schedule;
