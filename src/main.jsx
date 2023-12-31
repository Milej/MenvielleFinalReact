import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "./sass/App.scss";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBaVVaV2h75AFdyLog_kJD-Rv-K-89XCjk",
  authDomain: "mundo-peludo-5c157.firebaseapp.com",
  projectId: "mundo-peludo-5c157",
  storageBucket: "mundo-peludo-5c157.appspot.com",
  messagingSenderId: "370720908727",
  appId: "1:370720908727:web:4e69debd854cd82f15b432",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <App />
  // </React.StrictMode>
);
