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

      <h1 className="my-4">Code of Conduct</h1>

      {/* Introduction */}
      <Row className="mb-4">
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Introduction</Card.Title>
              <Card.Text>
                Our conference is dedicated to providing a harassment-free
                experience for everyone, regardless of gender, gender identity
                and expression, age, sexual orientation, disability, physical
                appearance, body size, race, ethnicity, religion (or lack
                thereof), or technology choices. We do not tolerate harassment
                of conference participants in any form. Sexual language and
                imagery are not appropriate for any conference venue, including
                talks, workshops, parties, Twitter, and other online media.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Expected Behavior */}
      <Row className="mb-4">
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Expected Behavior</Card.Title>
              <Card.Text>
                - Be considerate, respectful, and collaborative.
                <br />
                - Refrain from demeaning, discriminatory, or harassing behavior
                and speech.
                <br />- Be mindful of your surroundings and of your fellow
                participants. Alert conference organizers if you notice a
                dangerous situation or someone in distress.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Unacceptable Behavior */}
      <Row className="mb-4">
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Unacceptable Behavior</Card.Title>
              <Card.Text>
                - Harassment, intimidation, or discrimination in any form.
                <br />
                - Physical or verbal abuse of any attendee, speaker, volunteer,
                exhibitor, staff member, service provider, or other meeting
                guest.
                <br />
                - Inappropriate use of nudity and/or sexual images in public
                spaces or in presentations.
                <br />
                - Deliberate intimidation, stalking, or following.
                <br />
                - Harassing photography or recording.
                <br />
                - Sustained disruption of talks or other events.
                <br />- Unwelcome sexual attention.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Consequences of Unacceptable Behavior */}
      <Row className="mb-4">
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Consequences of Unacceptable Behavior</Card.Title>
              <Card.Text>
                Unacceptable behavior will not be tolerated. Anyone asked to
                stop unacceptable behavior is expected to comply immediately. If
                a participant engages in unacceptable behavior, the conference
                organizers may take any action they deem appropriate, including
                expulsion from the conference without warning or refund.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Reporting Guidelines */}
      <Row className="mb-4">
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Reporting Guidelines</Card.Title>
              <Card.Text>
                If you are subject to or witness unacceptable behavior, or have
                any other concerns, please notify a conference organizer as soon
                as possible. You can report unacceptable behavior to any member
                of staff.
              </Card.Text>
              <Card.Text>
                <strong>Contact Information:</strong> conduct@conference.com
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

export default Location;
