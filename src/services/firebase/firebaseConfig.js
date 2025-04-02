// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDTJhjWL6SLuH-wihFMQZUxcOa9Z0C_CBU",
  authDomain: "emmanuel-church-bbadf.firebaseapp.com",
  projectId: "emmanuel-church-bbadf",
  storageBucket: "emmanuel-church-bbadf.firebasestorage.app",
  messagingSenderId: "708608987947",
  appId: "1:708608987947:web:cc1ed6a85361d4490b6b6e",
  measurementId: "G-1M9L2DTKEW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
//const analytics = getAnalytics(app);