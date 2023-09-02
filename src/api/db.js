// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCmXKBFUBI8LdzfoY1FL4wpN3tHzjsq9Is",
  authDomain: "flashcards-native-52c02.firebaseapp.com",
  projectId: "flashcards-native-52c02",
  storageBucket: "flashcards-native-52c02.appspot.com",
  messagingSenderId: "318180350266",
  appId: "1:318180350266:web:8b2a73f6b462da08e91803"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = firebase.firestore(app);
export const auth = getAuth(app);