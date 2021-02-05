import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBmMKytPFvffiZy3m1m_dj-WwpkQYFSpVs",
  authDomain: "twitter-klone.firebaseapp.com",
  projectId: "twitter-klone",
  storageBucket: "twitter-klone.appspot.com",
  messagingSenderId: "361264526398",
  appId: "1:361264526398:web:d7b55352e78c1afd2e4d6f",
  measurementId: "G-FX4727E69T",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
export default db;
