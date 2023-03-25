// Import the functions you need from the SDKs you need
import { initializeApp, getApps } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth"
import firebase from "firebase/app";
import { getDatabase } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDSWyoSNu8trQ7-USY5FGHnaGaMMbZmJbM",
  authDomain: "theliquidlibrary-43449.firebaseapp.com",
  projectId: "theliquidlibrary-43449",
  storageBucket: "theliquidlibrary-43449.appspot.com",
  messagingSenderId: "1065753760114",
  appId: "1:1065753760114:web:33e76e238ab5735b57cdeb",
  measurementId: "G-6NXYHYPZ6W",
  databaseURL: "https://theliquidlibrary-43449-default-rtdb.europe-west1.firebasedatabase.app"
};

// Initialize Firebase


  
  const app = initializeApp(firebaseConfig)

  const db = getFirestore(app)
  const auth = getAuth(app)
  const database = getDatabase(app);
  
  export { auth, db, database };
//const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);