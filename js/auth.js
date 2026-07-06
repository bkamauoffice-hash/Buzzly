// Import Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAW-eIuB6mhVGW1k_URLJCf4hJfDGey7H8",
  authDomain: "buzzly-56f75.firebaseapp.com",
  projectId: "buzzly-56f75",
  storageBucket: "buzzly-56f75.firebasestorage.app",
  messagingSenderId: "526109842842",
  appId: "1:526109842842:web:52583fc8dc905cf2baee23",
  measurementId: "G-QGPLKG9PX1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Sign Up
window.signup = function () {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  createUserWithEmailAndPassword(auth, email, password)
    .then(() => {
      alert("Account created successfully!");
      window.location.href = "index.html";
    })
    .catch((error) => {
      alert(error.message);
    });
};

// Login
window.login = function () {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      alert("Login successful!");
      window.location.href = "home.html";
    })
    .catch((error) => {
      alert(error.message);
    });
};
