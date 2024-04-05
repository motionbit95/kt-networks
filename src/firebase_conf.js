// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBbVS4TGJ-x103-KaiNN1RsEdpveMSFl_k",
  authDomain: "motionbit-ktnetworks.firebaseapp.com",
  projectId: "motionbit-ktnetworks",
  storageBucket: "motionbit-ktnetworks.appspot.com",
  messagingSenderId: "392611803465",
  appId: "1:392611803465:web:2a99342975b3ba32acaa98",
  measurementId: "G-6TGSY2JFB8",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const analytics = getAnalytics(app);
