// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCIWHVrQfYc0-nNEUkfwDPjBXtX-Vj0tcc",
  authDomain: "snap-companion.firebaseapp.com",
  projectId: "snap-companion",
  storageBucket: "snap-companion.appspot.com",
  messagingSenderId: "137384434140",
  appId: "1:137384434140:web:c0b6aec56c57601f549719",
  measurementId: "G-KJ0MKVKD11"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
// const analytics = getAnalytics(app);
export default db