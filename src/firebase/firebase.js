import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"; 
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCLJqkJG-HP4R83vcSS71nkhgIIv23ZDhg",
  authDomain: "digi-6d693.firebaseapp.com",
  projectId: "digi-6d693",
  storageBucket: "digi-6d693.appspot.com",
  messagingSenderId: "552126179095",
  appId: "1:552126179095:web:754066741206eb2d57b952",
  measurementId: "G-2ZJX6LKBLD"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app); // Initialize Firebase Analytics
const auth = getAuth(app); // Initialize Firebase Authentication
const db = getFirestore(app); // Initialize Firestore

export  { auth, db };



