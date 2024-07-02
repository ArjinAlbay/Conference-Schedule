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
      <h1 className="my-4">Conference Schedule</h1>

      {/* Day 1 */}
      <h2 className="mb-4">Day 1</h2>
      <Row className="mb-4">
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>9:00 AM - Opening Keynote</Card.Title>
              <Card.Text>
                Kick off the conference with a keynote from a leading React
                expert.
              </Card.Text>
              <Card.Text>
                <strong>Speaker:</strong> Jane Doe
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="mb-4">
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>10:30 AM - Breakout Sessions</Card.Title>
              <Card.Text>
                Choose from a variety of sessions covering advanced React
                topics, state management, and more.
              </Card.Text>
              <Card.Text>
                <strong>Speakers:</strong> John Smith, Emily Davis
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="mb-4">
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>12:00 PM - Lunch Break</Card.Title>
              <Card.Text>
                Enjoy a delicious lunch and network with fellow attendees.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="mb-4">
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>1:30 PM - Workshops</Card.Title>
              <Card.Text>
                Hands-on workshops to dive deep into React best practices.
              </Card.Text>
              <Card.Text>
                <strong>Instructors:</strong> Michael Johnson, Sarah Lee
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Day 2 */}
      <h2 className="mb-4">Day 2</h2>
      <Row className="mb-4">
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>9:00 AM - Morning Session</Card.Title>
              <Card.Text>
                Start the day with an engaging session on React performance
                optimization.
              </Card.Text>
              <Card.Text>
                <strong>Speaker:</strong> Alice Brown
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="mb-4">
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>10:30 AM - Panel Discussion</Card.Title>
              <Card.Text>
                Join our panel of experts as they discuss the future of React
                and its ecosystem.
              </Card.Text>
              <Card.Text>
                <strong>Panelists:</strong> Mark Wilson, Lisa White, David
                Harris
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="mb-4">
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>12:00 PM - Lunch Break</Card.Title>
              <Card.Text>
                Enjoy a delicious lunch and network with fellow attendees.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="mb-4">
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>1:30 PM - Advanced React Techniques</Card.Title>
              <Card.Text>
                Explore advanced techniques for building scalable React
                applications.
              </Card.Text>
              <Card.Text>
                <strong>Speaker:</strong> Tom Clark
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="mb-4">
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>3:00 PM - Closing Remarks</Card.Title>
              <Card.Text>
                Wrap up the conference with closing remarks and a Q&A session
                with the organizers.
              </Card.Text>
              <Card.Text>
                <strong>Speakers:</strong> Conference Organizers
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

// {/* <h1 className="my-4">Conference Schedule</h1>

//       {/* Day 1 */}
//       <h2 className="mb-4">Day 1</h2>
//       <Row className="mb-4">
//         <Col>
//           <Card>
//             <Card.Body>
//               <Card.Title>9:00 AM - Opening Keynote</Card.Title>
//               <Card.Text>
//                 Kick off the conference with a keynote from a leading React expert.
//               </Card.Text>
//               <Card.Text>
//                 <strong>Speaker:</strong> Jane Doe
//               </Card.Text>
//             </Card.Body>
//           </Card>
//         </Col>
//       </Row>

//       <Row className="mb-4">
//         <Col>
//           <Card>
//             <Card.Body>
//               <Card.Title>10:30 AM - Breakout Sessions</Card.Title>
//               <Card.Text>
//                 Choose from a variety of sessions covering advanced React topics, state management, and more.
//               </Card.Text>
//               <Card.Text>
//                 <strong>Speakers:</strong> John Smith, Emily Davis
//               </Card.Text>
//             </Card.Body>
//           </Card>
//         </Col>
//       </Row>

//       <Row className="mb-4">
//         <Col>
//           <Card>
//             <Card.Body>
//               <Card.Title>12:00 PM - Lunch Break</Card.Title>
//               <Card.Text>
//                 Enjoy a delicious lunch and network with fellow attendees.
//               </Card.Text>
//             </Card.Body>
//           </Card>
//         </Col>
//       </Row>

//       <Row className="mb-4">
//         <Col>
//           <Card>
//             <Card.Body>
//               <Card.Title>1:30 PM - Workshops</Card.Title>
//               <Card.Text>
//                 Hands-on workshops to dive deep into React best practices.
//               </Card.Text>
//               <Card.Text>
//                 <strong>Instructors:</strong> Michael Johnson, Sarah Lee
//               </Card.Text>
//             </Card.Body>
//           </Card>
//         </Col>
//       </Row>

//       {/* Day 2 */}
//       <h2 className="mb-4">Day 2</h2>
//       <Row className="mb-4">
//         <Col>
//           <Card>
//             <Card.Body>
//               <Card.Title>9:00 AM - Morning Session</Card.Title>
//               <Card.Text>
//                 Start the day with an engaging session on React performance optimization.
//               </Card.Text>
//               <Card.Text>
//                 <strong>Speaker:</strong> Alice Brown
//               </Card.Text>
//             </Card.Body>
//           </Card>
//         </Col>
//       </Row>

//       <Row className="mb-4">
//         <Col>
//           <Card>
//             <Card.Body>
//               <Card.Title>10:30 AM - Panel Discussion</Card.Title>
//               <Card.Text>
//                 Join our panel of experts as they discuss the future of React and its ecosystem.
//               </Card.Text>
//               <Card.Text>
//                 <strong>Panelists:</strong> Mark Wilson, Lisa White, David Harris
//               </Card.Text>
//             </Card.Body>
//           </Card>
//         </Col>
//       </Row>

//       <Row className="mb-4">
//         <Col>
//           <Card>
//             <Card.Body>
//               <Card.Title>12:00 PM - Lunch Break</Card.Title>
//               <Card.Text>
//                 Enjoy a delicious lunch and network with fellow attendees.
//               </Card.Text>
//             </Card.Body>
//           </Card>
//         </Col>
//       </Row>

//       <Row className="mb-4">
//         <Col>
//           <Card>
//             <Card.Body>
//               <Card.Title>1:30 PM - Advanced React Techniques</Card.Title>
//               <Card.Text>
//                 Explore advanced techniques for building scalable React applications.
//               </Card.Text>
//               <Card.Text>
//                 <strong>Speaker:</strong> Tom Clark
//               </Card.Text>
//             </Card.Body>
//           </Card>
//         </Col>
//       </Row>

//       <Row className="mb-4">
//         <Col>
//           <Card>
//             <Card.Body>
//               <Card.Title>3:00 PM - Closing Remarks</Card.Title>
//               <Card.Text>
//                 Wrap up the conference with closing remarks and a Q&A session with the organizers.
//               </Card.Text>
//               <Card.Text>
//                 <strong>Speakers:</strong> Conference Organizers
//               </Card.Text>
//             </Card.Body>
//           </Card>
//         </Col>
//       </Row> */}
