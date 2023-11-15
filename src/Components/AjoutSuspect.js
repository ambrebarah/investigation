import React, { useState } from 'react';
import { Container, Row, Col, Tab, Nav, Navbar, Button } from 'react-bootstrap';

function AjoutSuspect() {
  const [nom, setNom] = useState('');
  const [description, setDescription] = useState('');


  return (
    <div style={{ background: 'black', color: 'yellow', minHeight: '100vh' }}>
    <Navbar bg="dark" variant="dark" expand="lg" className="mt-0">
      <Navbar.Brand style={{ fontSize: '2rem', fontWeight: 'bold' }}>
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
      <h2>Ajouter un suspect</h2>
      <input
        type="text"
        placeholder="Nom du suspect"
        value={nom}
        onChange={(e) => setNom(e.target.value)}
      />
      <textarea
        placeholder="Description du suspect"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
    </div>
  );
}

export default AjoutSuspect;
