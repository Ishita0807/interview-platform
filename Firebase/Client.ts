// Import the functions you need from the SDKs you need
import { initializeApp,getApp,getApps } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC4VeB_A8H2BS7ZILd8a_qZOxV9I0tXnXE",
  authDomain: "prepwise-1f624.firebaseapp.com",
  projectId: "prepwise-1f624",
  storageBucket: "prepwise-1f624.firebasestorage.app",
  messagingSenderId: "424800143445",
  appId: "1:424800143445:web:9b6bce0dfbee6d2488ecdc",
  measurementId: "G-CX9JBS3VNP"
};

// Initialize Firebase
const app = !getApps.length? initializeApp(firebaseConfig): getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);