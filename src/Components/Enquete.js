import React from 'react';
import { Container, Row, Col, Tab, Nav, Navbar, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FiMessageSquare } from 'react-icons/fi';
import top from '../assets/images/top.jpg';

function Enquete() {
  const enqueteStyle = {
    background: 'black',
    color: 'yellow',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: '56px', // Ajustez la hauteur de la barre de navigation
  };

  const brandLogoStyle = {
    fontSize: '2rem',
    fontWeight: 'bold',
  };

  const sectionHeadingStyle = {
    fontFamily: 'serif',
    fontSize: '1.2rem',
    fontStyle: 'italic',
    textAlign: 'center',
  };

  const centeredParagraphStyle = {
    width: '100%',
    margin: 'auto',
    textAlign: 'center',
    marginBottom: '1rem', // Ajoute une marge basse
  };

  const centeredImgStyle = {
    width: '50%',
    margin: 'auto',
    textAlign: 'center',
    marginBottom: '1rem', // Ajoute une marge basse
  };

  const centeredButtonStyle = {
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '1rem',
  };


  return (
    <div style={enqueteStyle}>
      <Navbar bg="dark" variant="dark" expand="lg" className="fixed-top">
        <Navbar.Brand style={brandLogoStyle}>
          Enquête Andronikov
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/enquete">Accueil</Nav.Link>
            <Nav.Link href="/suspect">Suspects</Nav.Link>
            <Nav.Link href="/participer">Participer</Nav.Link>
            <Nav.Link href="/listelements">Liste des éléments</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Container>
        <Tab.Container activeKey="message">
          <Row>
            <Col sm={12}>
              <Tab.Content>
              <Tab.Pane eventKey="message">
  <h2 style={sectionHeadingStyle}>Message</h2>
  <p style={centeredParagraphStyle} className="typewriter-text">
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
  <Button as={Link} to="/participer" variant="warning" style={centeredButtonStyle}>
    Participer à l'enquête <FiMessageSquare />
  </Button>
  <img src={top} alt="top" style={centeredImgStyle} />
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
