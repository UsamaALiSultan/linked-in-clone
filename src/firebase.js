import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import "firebase/compat/firestore"



const firebaseConfig = {
    apiKey: "AIzaSyCmWKrYuoSwdP4n-xZS3jlXYamjGVnuFKM",
    authDomain: "linked-in-clone-6aad1.firebaseapp.com",
    projectId: "linked-in-clone-6aad1",
    storageBucket: "linked-in-clone-6aad1.appspot.com",
    messagingSenderId: "990393911547",
    appId: "1:990393911547:web:21bf5dcdbb62b22509485e",
    measurementId: "G-MXKM3L183R"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  

  export {db , auth};