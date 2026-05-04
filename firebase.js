// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAT_tl4RrHBT9YpPw_BVgglktO7pzB9-zM",
  authDomain: "practical-93135.firebaseapp.com",
  projectId: "practical-93135",
  storageBucket: "practical-93135.firebasestorage.app",
  messagingSenderId: "203062627800",
  appId: "1:203062627800:web:ca9c1250f327d06163f6ad"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);