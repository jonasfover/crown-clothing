import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDq-gxWCspg8O0_PVKdukdA71vXrJG5E5s",
  authDomain: "crown-db-286ef.firebaseapp.com",
  databaseURL: "https://crown-db-286ef.firebaseio.com",
  projectId: "crown-db-286ef",
  storageBucket: "",
  messagingSenderId: "305253038588",
  appId: "1:305253038588:web:f8cf05b4a4af89fe"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ promp: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
