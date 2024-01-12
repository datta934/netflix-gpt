// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB3N5QUkwTu81QEOZBMET97_cWLdlyPk3Y",
  authDomain: "netflixgpt-a8fb4.firebaseapp.com",
  projectId: "netflixgpt-a8fb4",
  storageBucket: "netflixgpt-a8fb4.appspot.com",
  messagingSenderId: "894412591640",
  appId: "1:894412591640:web:3e6dde84c314229df9e96d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth()