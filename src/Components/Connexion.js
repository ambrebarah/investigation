// Connexion.js
import React, { useState } from 'react';
import { signIn } from '../auth';

function Connexion() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = async () => {
    try {
      const user = await signIn(email, password);
      // Gérez ici le succès de la connexion
      console.log('Connexion réussie', user);
    } catch (error) {
      // Gérez ici les erreurs de la connexion
      console.error('Erreur de connexion', error);
    }
  }

  return (
    <div>
      <h1>Connexion</h1>
      <input type="email" placeholder="Adresse e-mail" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Mot de passe" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleSignIn}>Se connecter</button>
    </div>
  );
}

export default Connexion;
