// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDF2SxIOGbPvRDQduodwnUhfcXNEGHPXuM",
  authDomain: "aerin-database.firebaseapp.com",
  databaseURL: "https://aerin-database-default-rtdb.firebaseio.com",
  projectId: "aerin-database",
  storageBucket: "aerin-database.firebasestorage.app",
  messagingSenderId: "1051600029256",
  appId: "1:1051600029256:web:07cf46dcee5c6b0a41fa7d",
  measurementId: "G-H7WB8PCLCV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);