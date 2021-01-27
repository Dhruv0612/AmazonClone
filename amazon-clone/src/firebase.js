import firebase from 'firebase';
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAPO2C4W4Fzhgq7hu9OW300Hanm4NxxJq8",
  authDomain: "challenge-123a4.firebaseapp.com",
  databaseURL: "https://challenge-123a4-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "challenge-123a4",
  storageBucket: "challenge-123a4.appspot.com",
  messagingSenderId: "977352260468",
  appId: "1:977352260468:web:8a8a211b23c571a2af8a21"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };