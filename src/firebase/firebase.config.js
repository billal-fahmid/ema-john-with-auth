// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBX4i-3cmnQevcmMukoCQA3_98PpK-3D8g",
  authDomain: "ema-john-with-auth-f7dbc.firebaseapp.com",
  projectId: "ema-john-with-auth-f7dbc",
  storageBucket: "ema-john-with-auth-f7dbc.appspot.com",
  messagingSenderId: "308947780530",
  appId: "1:308947780530:web:c5c426f2bf3d8c9d07daab"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;