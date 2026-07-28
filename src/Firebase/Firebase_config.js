// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBL_8-Ht6oNNoHWWC5aLGxG1nmMCuaLQck",
  authDomain: "react-dragon-news-auth-70f95.firebaseapp.com",
  projectId: "react-dragon-news-auth-70f95",
  storageBucket: "react-dragon-news-auth-70f95.firebasestorage.app",
  messagingSenderId: "385353291309",
  appId: "1:385353291309:web:7a0086332ff67c281e8aa4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;