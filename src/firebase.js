// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDR8BUt5xKLPGN4qGAhxlGI1ByGT_TqYmY",
  authDomain: "e-commerce-d218c.firebaseapp.com",
  databaseURL: "https://e-commerce-d218c-default-rtdb.firebaseio.com",
  projectId: "e-commerce-d218c",
  storageBucket: "e-commerce-d218c.firebasestorage.app",
  messagingSenderId: "223947707389",
  appId: "1:223947707389:web:2c111d337578f20195bf94",
  measurementId: "G-RZYZKRKC0H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;