import React from 'react';
import { Container, Row, Col, Tab, Nav, Navbar, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import pol from '../assets/images/pol.jpg';

function Enquete() {
  const enqueteStyle = {
    background: `url(${pol}) center/cover no-repeat`, // Utilisation de la propriété background pour l'image de fond
    color: 'yellow',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: '5px', // Ajustez la hauteur de la barre de navigation
  };
  
  const transparentBoxStyle = {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: '20px',
    borderRadius: '8px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '20vh', // Hauteur minimale pour éviter que la boîte ne devienne trop petite
  };
  
  const brandLogoStyle = {
    fontSize: '2rem',
    fontWeight: 'bold',
  };

  const sectionHeadingStyle = {
    fontFamily: 'serif',
    fontSize: '2rem',
    fontStyle: 'bold',
    textAlign: 'center',
  };

  const centeredParagraphStyle = {
    width: '100%',
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
                <div style={transparentBoxStyle}>
                  <h2 style={sectionHeadingStyle}>[ NOUVEAU MESSAGE ]</h2>
                  <div style={centeredParagraphStyle} className="typewriter-text">
                    <p>Félicitations, ton sens de l'observation t'a permis </p>
                    <p>d'arriver jusqu'ici. Si tu es là c'est que tu as accepté la mission.</p>
                    à toi de jouer.
                  </div>
                  <Button as={Link} to="/participer" variant="warning" style={centeredButtonStyle}>
                    Participer à l'enquête 
                  </Button>
                </div>
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
