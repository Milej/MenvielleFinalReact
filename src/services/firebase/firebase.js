// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBaVVaV2h75AFdyLog_kJD-Rv-K-89XCjk",
  authDomain: "mundo-peludo-5c157.firebaseapp.com",
  projectId: "mundo-peludo-5c157",
  storageBucket: "mundo-peludo-5c157.appspot.com",
  messagingSenderId: "370720908727",
  appId: "1:370720908727:web:4e69debd854cd82f15b432"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)

export const db = getFirestore(app)