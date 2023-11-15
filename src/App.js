// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Accueil from './Components/Accueil';
import Enquete from './Components/Enquete';
import Suspect from './Components/Suspect';
import Participer from './Components/Participer';
import ListeElements from './Components/ListeElements';
import PageSecret from './Components/PageSecret';
import Footer from './Components/Footer'; // Importer le composant Footer

function App() {
  const [isEnqueteActive, setIsEnqueteActive] = useState(false);

  const demarrerEnquete = () => {
    setIsEnqueteActive(true);
  }

 

  return (
    <Router>
      <div style={{ minHeight: '100vh', position: 'relative' }}>
        <Routes>
          <Route path="/enquete" element={<Enquete />} />
          <Route path="/" element={<PageSecret />} />
          <Route path="/accueil" element={isEnqueteActive ? <Enquete /> : <Accueil demarrerEnquete={demarrerEnquete} />} />
          <Route path="/suspect" element={<Suspect />} />
          <Route path="/participer" element={<Participer />} />
          <Route path="/listelements" element={<ListeElements />} />
        </Routes>
        <Footer />{/* Inclure le composant Footer à la fin de l'application */}
      </div>
    </Router>
  );
}

export default App;
