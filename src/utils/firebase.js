// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth} from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDVbJDHcFl70wIXMMu5Fh6je_IHumICAN4",
  authDomain: "watchy-fee7c.firebaseapp.com",
  projectId: "watchy-fee7c",
  storageBucket: "watchy-fee7c.firebasestorage.app",
  messagingSenderId: "979648783571",
  appId: "1:979648783571:web:8463f85ad022d3ddaae026",
  measurementId: "G-ML8WF3SQJL",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();