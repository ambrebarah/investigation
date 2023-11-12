// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Accueil from './Components/Accueil';
import Enquete from './Components/Enquete';
import Suspect from './Components/Suspect';
import Connexion from './Components/Connexion';
import Inscription from './Components/Inscription';

function App() {
  const [isEnqueteActive, setIsEnqueteActive] = useState(false);

  const demarrerEnquete = () => {
    setIsEnqueteActive(true);
  }

  return (
    <Router>
      <Routes>
        <Route path="/enquete" element={<Enquete />} />
        <Route path="/" element={isEnqueteActive ? <Enquete /> : <Accueil demarrerEnquete={demarrerEnquete} />} />
        <Route path="/suspect" element={<Suspect />} />
        <Route path="/connexion" element={<Connexion />} />
        <Route path="/inscription" element={<Inscription />} />
      </Routes>
    </Router>
  );
}

export default App;
