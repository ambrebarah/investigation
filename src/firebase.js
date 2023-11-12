import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCHR81r4MFMQXdGkOvohTfoJ_dcvfk9rYo",
    authDomain: "kenji-488d3.firebaseapp.com",
    projectId: "kenji-488d3",
    storageBucket: "kenji-488d3.appspot.com",
    messagingSenderId: "647184142498",
    appId: "1:647184142498:web:6284b8750778330f5787fb",
    measurementId: "G-BCYDRB9JC8"
  };

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const firestore = getFirestore(app);
  
  export { auth, firestore };
