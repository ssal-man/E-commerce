import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config={
    apiKey: "AIzaSyCoEijI17NDIbA7Nv75KRcpfV9kwjMwe9g",
    authDomain: "crowndb-6c7c2.firebaseapp.com",
    databaseURL: "https://crowndb-6c7c2.firebaseio.com",
    projectId: "crowndb-6c7c2",
    storageBucket: "crowndb-6c7c2.appspot.com",
    messagingSenderId: "405908998334",
    appId: "1:405908998334:web:320ea1ebab550d4e8976ef",
    measurementId: "G-P4ZCQ657CV"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt:'select_account'});
  export const SignInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;
