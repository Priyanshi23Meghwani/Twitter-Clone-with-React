import firebase from "firebase";



// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCAKkL3KDh3M0F__DfBssys0ih8GQJqlTs",
    authDomain: "twitter-clone-5ef11.firebaseapp.com",
    projectId: "twitter-clone-5ef11",
    storageBucket: "twitter-clone-5ef11.appspot.com",
    messagingSenderId: "232183349917",
    appId: "1:232183349917:web:ea8368b64c2ac393944a74",
    measurementId: "G-0HBKNL3XD7"
  };

 
  //connect firebase to code
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const storage = firebase.storage();
  
  const db = firebaseApp.firestore();
  export default db;
  export {storage};

  //

