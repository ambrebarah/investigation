import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function AjouterElement() {
  const [pseudo, setPseudo] = useState('');
  const [contenu, setContenu] = useState('');
  const [image, setImage] = useState(null);
  const navigate = useNavigate();

  const handleAjouterElement = async () => {
    try {
      const formData = new FormData();
      formData.append('pseudo', pseudo);
      formData.append('contenu', contenu);
      formData.append('image', image);

      // Envoi de la requête à l'API Vercel avec fetch
      const response = await fetch('/api/ajouter-element', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        console.log('Élément ajouté avec succès');
        // Rediriger vers la page /listelements
        navigate('/listelements');
      } else {
        console.error('Erreur lors de l\'ajout de l\'élément:', response.statusText);
      }
    } catch (error) {
      console.error('Erreur lors de l\'ajout de l\'élément', error.message);
    }
  };

  return (
    <div style={{ background: 'black', color: 'yellow', minHeight: '100vh' }}>
      <Container>
        <h1 className="mt-4 mb-4">Ajouter un Élément</h1>
        <p>Tu as pu découvrir un élement de plus? n'hésites pas à nous le partager</p>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Pseudo</Form.Label>
            <Form.Control type="text" placeholder="Pseudo" value={pseudo} onChange={(e) => setPseudo(e.target.value)} />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Contenu de l'élément</Form.Label>
            <Form.Control as="textarea" rows={3} placeholder="Contenu de l'élément" value={contenu} onChange={(e) => setContenu(e.target.value)} />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Image</Form.Label>
            <Form.Control type="file" onChange={(e) => setImage(e.target.files[0])} />
          </Form.Group>

          <Button variant="warning" onClick={handleAjouterElement}>
            Ajouter
          </Button>
        </Form>
      </Container>
    </div>
  );
}

export default AjouterElement;
