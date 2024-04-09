// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAEp5cijSYaMcqb-EBOctrTyHI4Z5GnKyw",
  authDomain: "citizen-central.firebaseapp.com",
  projectId: "citizen-central",
  storageBucket: "citizen-central.appspot.com",
  messagingSenderId: "323276185825",
  appId: "1:323276185825:web:5877e027165637f00697a0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;