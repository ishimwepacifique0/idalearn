// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDZD0Mg4JFaauUSYcdEvDxensj3LqtoiJ8",
  authDomain: "cohort02movies.firebaseapp.com",
  projectId: "cohort02movies",
  storageBucket: "cohort02movies.appspot.com",
  messagingSenderId: "94751389026",
  appId: "1:94751389026:web:e4f2d9b6114b84cabfa83b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(app)
export const FIREBASE_DATABASE = getFirestore(app)