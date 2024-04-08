// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAE5FM-Q1lCrSGlRKol3DeGWNy8X1F1F3Q",
  authDomain: "firebasae-auth.firebaseapp.com",
  projectId: "firebasae-auth",
  storageBucket: "firebasae-auth.appspot.com",
  messagingSenderId: "1031559125942",
  appId: "1:1031559125942:web:41282dfd31955d36eeff17"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)