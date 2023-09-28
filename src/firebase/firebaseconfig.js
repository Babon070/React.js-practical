// For Firebase JS SDK v7.20.0 and later, measurementId is optionalfire
import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCAHYFs4qyhSshw6eQI72iWl5VvCeMdsJc",
  authDomain: "store-7c5d2.firebaseapp.com",
  projectId: "store-7c5d2",
  storageBucket: "store-7c5d2.appspot.com",
  messagingSenderId: "342925074529",
  appId: "1:342925074529:web:ca9d6bbca17742dfe7ca20",
  measurementId: "G-X4D7SVR1J3",
};

const server = firebase.initializeApp(firebaseConfig);
const auth = server.auth();
const provider = new firebase.auth.GoogleAuthProvider();


export {auth, provider}
