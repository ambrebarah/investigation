// Footer.jsx
import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const Footer = ({ onJoinChat }) => {
  const footerStyle = {
    position: 'fixed',
    bottom: '0',
    padding: '10px',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    color: 'white',
    width: '100%', // Largeur du pied de page sur toute la largeur
  };



  return (
    <div style={footerStyle}>
      <footer className="bg-dark text-white mt-5">
        <Container fluid>
          <Row className="d-flex justify-content-between align-items-center">
            <Col>
              <p>© 2023 Kenji Andronikov</p>
            </Col>
            <Col className="d-flex justify-content-end">
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  );
};

export default Footer;
