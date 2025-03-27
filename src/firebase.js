// src/firebase.js

import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import { getStorage } from 'firebase/storage'; 

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDCLnywvRtAtfLiNc677v9zTIqQWnkc8o8",
  authDomain: "chowkabaraa.firebaseapp.com",
  projectId: "chowkabaraa",
  storageBucket: "chowkabaraa.firebasestorage.app",
  messagingSenderId: "199796762110",
  appId: "1:199796762110:web:92f8bff9f8f0184cb58caf",
  measurementId: "G-RCPQJ0G15E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Auth and Storage
const auth = getAuth(app);
const storage = getStorage(app);

export { auth, GoogleAuthProvider, signInWithPopup, signOut, storage };

