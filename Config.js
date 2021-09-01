import firebase from 'firebase/app'
require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyB2ceM7GmtK3EzecsDkm8qhtpwmPHV5gvM",
    authDomain: "storyhub-697ba.firebaseapp.com",
    projectId: "storyhub-697ba",
    storageBucket: "storyhub-697ba.appspot.com",
    messagingSenderId: "587806810052",
    appId: "1:587806810052:web:087078839b1d55733b8e91",
    measurementId: "G-4WH6HLHE1X"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  export default firebase.firestore() ;









