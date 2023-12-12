import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/database";

firebase.initializeApp({
  apiKey: "AIzaSyD-yIw-EcHiJ3asXhYASSBhlXeeRgriArE",
  authDomain: "noteapp-4b8a8.firebaseapp.com",
  projectId: "noteapp-4b8a8",
  storageBucket: "noteapp-4b8a8.appspot.com",
  messagingSenderId: "954036130512",
  appId: "1:954036130512:web:a064c4acebc845f0bf04d5",
});

const FIREBASE = firebase;

export default FIREBASE;
