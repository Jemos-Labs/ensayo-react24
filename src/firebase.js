import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCX5EVvJCrbKMzMAp0yoAFF_f0MV-J7HRU",
  authDomain: "mi-firebase-terra.firebaseapp.com",
  projectId: "mi-firebase-terra",
  storageBucket: "mi-firebase-terra.firebasestorage.app",
  messagingSenderId: "778095126371",
  appId: "1:778095126371:web:5a2fdfc885bc9c77ead556",
  measurementId: "G-3YH70TVXSJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
