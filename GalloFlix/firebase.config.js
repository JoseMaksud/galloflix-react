// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBYO5CcWEq3H-f8UxG-O-QuZwFGwacYozQ",
  authDomain: "galloflix-afd45.firebaseapp.com",
  projectId: "galloflix-afd45",
  storageBucket: "galloflix-afd45.appspot.com",
  messagingSenderId: "93473911597",
  appId: "1:93473911597:web:36a3a269fd1ff364a299a4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);