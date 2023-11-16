import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { Container, Navbar, Nav, Card, Col } from 'react-bootstrap';

function ListeElements() {
  const [elements, setElements] = useState([]);


  useEffect(() => {
    const fetchElements = async () => {
      try {
        const response = await axios.get('/api/liste-elements');
        console.log('Données reçues côté front-end :', response.data);
        setElements(response.data);
      } catch (error) {
        console.error('Erreur lors de la récupération des éléments', error);
      }
    };

    fetchElements();
  }, []);

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('fr-FR', options);
  };


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

      <Container>
        <h2 className="mt-4">Liste des éléments</h2>
        <div className="d-flex flex-wrap justify-content-between">
          {elements.map((element) => (
            <Col key={element.id} md={4} style={{ marginBottom: '20px' }}>
              <Card style={{ background: 'rgba(255, 255, 255, 0.1)', border: 'none' }}>
                <Card.Body>
                  <Card.Title className="text-white">
                    <strong>Mit par: </strong>{element.pseudo}
                  </Card.Title>
                  <Card.Subtitle className="text-white">Le: {formatDate(element.date_creation)}</Card.Subtitle>
                  <Card.Text className="text-white">Message: {element.contenu}</Card.Text>
                  {element.image && <Card.Img src={`data:image/jpeg;base64,${element.image}`} alt="Element" style={{ maxWidth: '100%', borderRadius: '0' }} />}
                </Card.Body>
              </Card>
            </Col>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default ListeElements;
