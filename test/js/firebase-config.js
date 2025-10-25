// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-analytics.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDQ977jiJfBDkatg9eAU02oMAhmVg7dafU",
  authDomain: "portfolio-c14f2.firebaseapp.com",
  projectId: "portfolio-c14f2",
  storageBucket: "portfolio-c14f2.appspot.com",
  messagingSenderId: "894844113664",
  appId: "1:894844113664:web:692f5c717cb11d7866d9e5",
  measurementId: "G-CPH7RV6E5M",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
