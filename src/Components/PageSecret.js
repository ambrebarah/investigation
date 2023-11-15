import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

// Importez votre image de fond (background)
import blackBackground from '../assets/images/interdit.jpg'; // Assurez-vous que le chemin soit correct

function PageSecrete() {
  const [confirmation, setConfirmation] = useState(false);
  const [derniereChance, setDerniereChance] = useState(false);
  const navigate = useNavigate();

  const handleConfirmation = () => {
    setConfirmation(true);
  };

  const handleDerniereChance = () => {
    setDerniereChance(true);
  };

  const handleAccesPageEnquete = () => {
    navigate('/accueil');
  };

  const handlePartir = () => {
    // Rediriger vers une autre page ou quitter l'application
    console.log('Partir');
navigate('www.google.fr');
  };

  return (
    <div
      style={{
        background: `url(${blackBackground})`, // Fond noir
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '100vh', // Centrez verticalement en ajustant la hauteur
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white', // Texte blanc
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
              {!confirmation ? (
                <>
                  <h1 className="text-light">ATTENTION!</h1>
                  <p className="text-light">
                    Je te laisse une dernière chance pour rebrousser chemin..
                  </p>
                  <Button variant="danger" onClick={handlePartir} className="mr-2">
                    Partir
                  </Button>
                  <br></br>
                  <br></br>
                  <Button variant="warning" onClick={handleConfirmation}>
                    Rentrer
                  </Button>
                </>
              ) : (
                <>
                  {!derniereChance ? (
                    <>
                      <h1 className="text-light">TOP SECRET</h1>
                      <p className="text-light">
                        Cliquez sur le bouton ci-dessous pour accéder à l'enquête.
                      </p>
                      <Link to="/accueil"></Link>
                      <Button variant="warning" onClick={handleAccesPageEnquete} className="mb-3">
                        Accéder à l'enquête
                      </Button>
                    </>
                  ) : (
                    <>
                      <h1 className="text-light">DERNIÈRE CHANCE</h1>
                      <p className="text-light">
                        Êtes-vous sûr de vouloir continuer ?
                      </p>
                      <Button variant="danger" onClick={handlePartir} className="mr-2">
                        Partir
                      </Button>
                      <Button variant="warning" onClick={handleAccesPageEnquete}>
                        Rentrer
                      </Button>
                    </>
                  )}
                </>
              )}
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default PageSecrete;
