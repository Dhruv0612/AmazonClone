import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBU82J4sLe4xJCoFmBBeV1rPnwmRQQrBgc",
    authDomain: "blogapp-e4c3c.firebaseapp.com",
    projectId: "blogapp-e4c3c",
    storageBucket: "blogapp-e4c3c.appspot.com",
    messagingSenderId: "1065166950620",
    appId: "1:1065166950620:web:2175dfc61ceda0a7afe419"
});

const db = firebaseApp.firestore();

export default db;