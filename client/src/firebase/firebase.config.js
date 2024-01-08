// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// console.log(import.meta.env.VITE_SOME_KEY);

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBGi3eTYAeu4o4wozhMCqKw_5QWO1UEwUM",
  authDomain: "foodie-food-ordering-app-73987.firebaseapp.com",
  projectId: "foodie-food-ordering-app-73987",
  storageBucket: "foodie-food-ordering-app-73987.appspot.com",
  messagingSenderId: "627991176432",
  appId: "1:627991176432:web:5def56c6f1787b83640e35"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// No need for .then() or .catch(), initializeApp is synchronous
console.log("Firebase initialized successfully");

export default app;
