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

  export const createUserProfile = async (userAuth, additionalInfo)=>{
    if(!userAuth)return;

    const userRef = firestore.doc(`users/${userAuth.uid}`)
    const snapshot = await userRef.get()
    if(!snapshot.exists){
      const { displayName, email} = userAuth
      const createdAt = new Date();
      try{
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalInfo
        })
      }
      catch(error){
        console.log("error in creating user",error.message)
      }
    }
    return userRef
  }

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt:'select_account'});
  export const SignInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;
