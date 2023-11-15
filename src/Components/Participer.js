import React from 'react';
import { Container, Row, Col, Tab, Nav, Navbar, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import AjouterElement from './AjouterElement';

function Participer() {
  return (
        <div style={{ background: 'black', color: 'yellow', minHeight: '100vh' }}>
          <Navbar bg="dark" variant="dark" expand="lg" className="mt-0">
            <Navbar.Brand style={{ fontSize: '2rem', fontWeight: 'bold' }}>
              Enquête Andronikov
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="/enquete">Enquête</Nav.Link>
                <Nav.Link href="/suspect">Suspects</Nav.Link>
                <Nav.Link href="/participer">Participer</Nav.Link>
                <Nav.Link href="/listelements">Liste des éléments</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
      <Container>
        {/* Contenu de la page de participation */}
        {/* Ajoutez ici le formulaire ou le contenu de la participation */}

        {/* Intégration du formulaire AjouterElement */}
        <AjouterElement />
        {/* Bouton "Accueil" pour revenir à la page de l'enquête */}

      </Container>
    </div>
  );
}

export default Participer;
