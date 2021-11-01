import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyB1PCaQa4tx6Jqz61ddFwhbSCqoxfL7Bg8",
    authDomain: "resumebuilder-586fc.firebaseapp.com",
    projectId: "resumebuilder-586fc",
    storageBucket: "resumebuilder-586fc.appspot.com",
    messagingSenderId: "1051430038810",
    appId: "1:1051430038810:web:826287c1d2d8ca177b10a3"
  };
  
 // Initialize Firebase
 firebase.initializeApp(firebaseConfig);
 export const auth=firebase.auth();
 export const firestore= firebase.firestore();
 export default firebase;



