// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.3/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.8.3/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC3fOJQ5ikb5UrxNLfjBD1q6_RCKoQ_nKo",
  authDomain: "mafia-32160.firebaseapp.com",
  projectId: "mafia-32160",
  storageBucket: "mafia-32160.appspot.com",
  messagingSenderId: "354757847211",
  appId: "1:354757847211:web:26ee8def3f66b0f8702fee",
  measurementId: "G-81RX9TN2NW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);