import Header from "../components/Header";
import Footer from "../components/Footer";
import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Cards from "../components/Cards";
import { Link } from "react-router-dom";
import { generateMockSpeakers } from "../data/MockData";
import sanityClient from "../client"; // Import the Sanity client
function Homepage() {
  const [speakers, setSpeakers] = useState([]);
  const [cards, setCards] = useState([]);

  useEffect(() => {
    sanityClient
      .fetch('*[_type == "event"]{bio}')
      .then((data) => setCards(data))
      .catch((error) => console.error("Error fetching card data:", error));
  }, []);

  useEffect(() => {
    const data = generateMockSpeakers(3);

    setSpeakers(data);
  }, []);

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
          <div>
            {cards.length > 0 ? (
              cards.map((content, index) => <b key={index}>{content.bio}</b>)
            ) : (
              <p>No content available</p> // Fallback message
            )}
            <p>
              The React Conference 2024 will be held at the Grand Convention
              Center, located in the heart of the city. The venue is easily
              accessible by public transportation and offers a range of
              amenities to ensure a comfortable experience for all attendees.
            </p>
          </div>

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
        {speakers.map((speaker, index) => (
          <Col key={index} md={3}>
            <Cards
              image={speaker.image}
              title={speaker.title}
              bio={speaker.bio}
            ></Cards>
          </Col>
        ))}
      </Row>

      {/********** FOOTER *********** */}
      <Row className="mt-auto">
        <Col>
          <Footer />
        </Col>
      </Row>
    </Container>
  );
}

export default Homepage;
