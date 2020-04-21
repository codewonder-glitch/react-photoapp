import * as firebase from 'firebase';
import firestore from 'firebase/firestore'
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBuSoXCCbJymUxV8WmG8-3seh68328O_Ys",
    authDomain: "photoapp-46beb.firebaseapp.com",
    databaseURL: "https://photoapp-46beb.firebaseio.com",
    projectId: "photoapp-46beb",
    storageBucket: "photoapp-46beb.appspot.com",
    messagingSenderId: "76673239256",
    appId: "1:76673239256:web:7d897a4a665eaf68796fad"
  };
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
//   firebase.firestore().settings(settings);




export default firebase

