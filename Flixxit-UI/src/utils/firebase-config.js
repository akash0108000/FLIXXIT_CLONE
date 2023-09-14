import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBcBh0_1gH-1GsQLhAe2r0QsJ6xrDbQ974",
  authDomain: "react-flixxit-clone.firebaseapp.com",
  projectId: "react-flixxit-clone",
  storageBucket: "react-flixxit-clone.appspot.com",
  messagingSenderId: "283056766455",
  appId: "1:283056766455:web:6560f3544709b09605c2f2",
  measurementId: "G-WGR24L1Y6X"
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);