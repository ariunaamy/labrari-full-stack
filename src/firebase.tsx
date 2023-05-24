// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAcCz5NZPMHnsr4OVupd0QLvajh07KpQT0",
  authDomain: "labrari-a1b22.firebaseapp.com",
  projectId: "labrari-a1b22",
  storageBucket: "labrari-a1b22.appspot.com",
  messagingSenderId: "1067764565332",
  appId: "1:1067764565332:web:b2d20b77027e0a773274c1",
  measurementId: "G-BH4CHR80ZH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
