// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCRRP5M9l4jyWkbmZUWoH08HYRv6uycXbU",
  authDomain: "ava-final-13-06-2024.firebaseapp.com",
  projectId: "ava-final-13-06-2024",
  storageBucket: "ava-final-13-06-2024.appspot.com",
  messagingSenderId: "780122434703",
  appId: "1:780122434703:web:85aec69f38cefadaf3d4fa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);