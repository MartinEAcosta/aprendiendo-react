// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCgJ_pxiOoFmJkGNbXmQd1TUeWBuZJGbio",
  authDomain: "react-devtalles-4d4ab.firebaseapp.com",
  projectId: "react-devtalles-4d4ab",
  storageBucket: "react-devtalles-4d4ab.firebasestorage.app",
  messagingSenderId: "816304339634",
  appId: "1:816304339634:web:5b3d6cce9cc9360f3627ab"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);

export const FirebaseAuth = getAuth( FirebaseApp );

export const FirebaseDB = getFirestore( FirebaseApp );