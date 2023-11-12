import React from 'react';
import { Container, Row, Col, Tab, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Connexion from './Connexion';
import Inscription from './Inscription';

function Enquete() {
  return (
    <div
      style={{
        background: 'black',
        color: 'yellow',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        minHeight: '100vh',
        margin: 0,
      }}
    >
      <Navbar bg="dark" variant="dark" expand="lg" className="mt-0">
        <Navbar.Brand style={{ fontSize: '2rem', fontWeight: 'bold' }}>
          Enquête Andronikov
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/suspect">
              Suspects
            </Nav.Link>
            <Nav.Link as={Link} to="/connexion">
              Connexion
            </Nav.Link>
            <Nav.Link as={Link} to="/inscription">
              Inscription
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Container>
        <Tab.Container activeKey="message">
          <Row>
            <Col sm={12}>
              <Tab.Content>
                <Tab.Pane eventKey="message" style={{ marginTop: '2rem' }}>
                  <h2
                    style={{
                      fontFamily: 'serif',
                      fontSize: '1.2rem',
                      fontStyle: 'italic',
                      textAlign: 'center',
                    }}
                  >
                    Message
                  </h2>
                  <p>
                    Félicitations, ton sens de l'observation t'a permis d'arriver
                    jusqu'ici. Comme tu as pu le deviner, je suis sur une enquête
                    importante, celle du meurtre de mes parents. L'affaire a été
                    classée sans suite dû à leur accident de voiture mais je suis
                    convaincu depuis toujours qu'ils ont été assassinés. J'ai alors
                    besoin de ton aide pour élucider cette affaire. Des indices
                    ainsi que des suspects et autres seront répertoriés ici. Tu
                    auras la possibilité de poser tes théories sur tout ça. Merci
                    à toi et bonne chance.
                  </p>
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </Container>
    </div>
  );
}

export default Enquete;
