import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import suspectImage1 from '../assets/images/suspect1.jpg';
import suspectImage2 from '../assets/images/suspect2.jpg';

const Suspect = () => {
  const suspects = [
    {
      id: 1,
      name: 'Suspect 1',
      image: suspectImage1,
      description: 'Description du suspect 1. Informations sur son rôle présumé dans l\'affaire Andronikov.',
    },
    {
      id: 2,
      name: 'Suspect 2',
      image: suspectImage2,
      description: 'Description du suspect 2. Informations sur son implication présumée dans l\'enquête.',
    },
    // Ajoutez d'autres suspects au besoin
  ];

  return (
    <div style={{ background: 'black', minHeight: '100vh' }}>
      <Container>
        <h1 className="mt-4 text-white">Liste des Suspects</h1>
        <Row>
          {suspects.map((suspect) => (
            <Col key={suspect.id} sm={6} md={4} lg={3}>
              <div className="text-center mt-4">
                <img src={suspect.image} alt={suspect.name} style={{ maxWidth: '100%' }} />
                <h3 className="mt-2 text-white">{suspect.name}</h3>
                <p className="text-white">{suspect.description}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default Suspect;
