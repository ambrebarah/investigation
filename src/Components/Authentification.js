import React, { useState } from 'react';

function Authentification({ onAuthentification }) {
  const [code, setCode] = useState('');
  const [erreur, setErreur] = useState('');
  const [questionAffichée, setQuestionAffichée] = useState(false);
  const [réponse, setRéponse] = useState('');

  const handleAuthentification = () => {
    if (code === "IWILLFINDYOU") {
      onAuthentification();
      setErreur(''); // Réinitialisez toute erreur précédente.
      setQuestionAffichée(true);
    } else {
      setErreur("Code incorrect. Veuillez vérifier le code.");
    }
  };

  const handleRéponse = (oui) => {
    if (oui) {
      setRéponse('Oui');
    } else {
      setRéponse('Non');
    }
  };

  return (
    <div className="authentification">
      {!questionAffichée ? (
        <>
          <h2>Authentification requise</h2>
          <p>Avant d'accéder au site, veuillez saisir le code de vérification :</p>
          <input type="text" placeholder="Code de vérification" value={code} onChange={(e) => setCode(e.target.value)} />
          <button onClick={handleAuthentification}>Valider</button>
          {erreur && (
            <div className="erreur">
              {erreur}
            </div>
          )}
        </>
      ) : (
        <>
          <h2>Bienvenue</h2>
          <p>Tu as réussi à trouver mon code. J'ai désormais besoin de tes talents d'investigateur pour m'aider à trouver l'assassin de mes parents, seras-tu prêt à relever le défi ?</p>
          <button onClick={() => handleRéponse(true)}>Oui</button>
          <button onClick={() => handleRéponse(false)}>Non</button>
          {réponse && (
            <div className="réponse">
              Ta réponse : {réponse}
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default Authentification;
