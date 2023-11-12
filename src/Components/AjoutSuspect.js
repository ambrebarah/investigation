import React, { useState } from 'react';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth'; 
import { auth, firestore } from './firebase';

function AjoutSuspect() {
  const [nom, setNom] = useState('');
  const [description, setDescription] = useState('');

  const ajouterSuspect = () => {
    firebase.firestore().collection('suspects').add({
      nom,
      description,
    });
    setNom('');
    setDescription('');
  };

  return (
    <div>
      <h2>Ajouter un suspect</h2>
      <input
        type="text"
        placeholder="Nom du suspect"
        value={nom}
        onChange={(e) => setNom(e.target.value)}
      />
      <textarea
        placeholder="Description du suspect"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button onClick={ajouterSuspect}>Ajouter</button>
    </div>
  );
}

export default AjoutSuspect;
