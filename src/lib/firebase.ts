// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC7s_HAu-GtucNWaAfGiSF55C3qDooNTXg",
  authDomain: "portfolio-db5cf.firebaseapp.com",
  projectId: "portfolio-db5cf",
  storageBucket: "portfolio-db5cf.firebasestorage.app",
  messagingSenderId: "181215119159",
  appId: "1:181215119159:web:16a96c4d59d6d30ef4bcb2",
  measurementId: "G-XBBCJH7S87"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
