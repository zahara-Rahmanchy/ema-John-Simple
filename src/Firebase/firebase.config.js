// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import {getAnalytics} from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCobtJQIS6TU6kCVMI8bO5cUejCT9PH1vk",
  authDomain: "ema-john-simple-5ad11.firebaseapp.com",
  projectId: "ema-john-simple-5ad11",
  storageBucket: "ema-john-simple-5ad11.appspot.com",
  messagingSenderId: "1031952102766",
  appId: "1:1031952102766:web:9f6cf6950f6f0bcb837d7f",
  measurementId: "G-05M25GQ4LE",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
