import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


// Importez votre image de fond (background)
import background from '../assets/images/im.jpg'; // Assurez-vous que le chemin soit correct

function Accueil() {
  const [codeAcces, setCodeAcces] = useState('');
  const [erreur, setErreur] = useState('');

  const handleDemarrerEnquete = () => {
    if (codeAcces === 'iwillfindyou') {
      window.location.href = '/enquete'; // Rediriger l'utilisateur vers la page d'enquête
    } else {
      setErreur('Code d\'accès incorrect. Veuillez réessayer.');
    }
  }
  

  return (
    <div
      style={{
        background: `url(${background})`, // Définissez l'image de fond
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '100vh', // Centrez verticalement en ajustant la hauteur
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div
        style={{
          backgroundColor: 'rgba(0, 0, 0, 0.7)', // Arrière-plan opaque
          padding: '20px', // Marge intérieure pour le contenu
          borderRadius: '10px', // Coins arrondis
        }}
      >
        <Container>
          <Row className="justify-content-center">
            <Col xs={12} sm={8} md={6}>
              <h1 className="text-light">Bienvenue</h1>
              <p className="text-light"><strong>Indice:</strong>Je suis sous mon meilleur profil aujourd'hui</p>
              <Form>
                <Form.Group controlId="codeAcces" className="mb-3"> {/* Ajoutez une marge en bas (mb-3) */}
                  <Form.Control
                    type="password"
                    placeholder="Entrez le code d'accès"
                    value={codeAcces}
                    onChange={(e) => setCodeAcces(e.target.value)}
                  />
                </Form.Group>
                <Button
                  variant="warning"
                  type="button"
                  onClick={handleDemarrerEnquete}
                  className="mb-3" 
                >
                  Accéder à l'enquête
                </Button>
                {erreur && <p className="text-danger mt-3">{erreur}</p>}
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default Accueil;
