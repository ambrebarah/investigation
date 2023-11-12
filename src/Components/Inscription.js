import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { signUp } from '../auth';

function Inscription() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [inscriptionSuccess, setInscriptionSuccess] = useState(false);

  const handleSignUp = async () => {
    try {
      const user = await signUp(email, password);
      // Gérez ici le succès de l'inscription
      console.log('Inscription réussie', user);
      setInscriptionSuccess(true);
    } catch (error) {
      // Gérez ici les erreurs de l'inscription
      console.error('Erreur durant inscription', error);
    }
  }

  return (
    <Container style={{ background: 'black', color: 'white', padding: '20px' }}>
      <h1 className="mt-4">Inscription</h1>
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Adresse e-mail</Form.Label>
          <Form.Control
            type="email"
            placeholder="Entrez votre e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Mot de passe</Form.Label>
          <Form.Control
            type="password"
            placeholder="Entrez votre mot de passe"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        {inscriptionSuccess && (
          <p style={{ color: 'green' }}>Inscription réussie !</p>
        )}
        <Button variant="warning" type="button" onClick={handleSignUp}>
          S'inscrire
        </Button>
      </Form>
    </Container>
  );
}

export default Inscription;
