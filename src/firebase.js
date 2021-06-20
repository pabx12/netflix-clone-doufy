import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyCn5G-4IPgf7TCm-4WikQUCMcaW1yhussA",
    authDomain: "netflix-clone-doudev.firebaseapp.com",
    projectId: "netflix-clone-doudev",
    storageBucket: "netflix-clone-doudev.appspot.com",
    messagingSenderId: "216075529094",
    appId: "1:216075529094:web:15d717559a6a610e469a07"
  };

const app = firebase.initializeApp(firebaseConfig);

const register = firebase.auth().createUserWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in 
    var user = userCredential.user;
    console.log(user)
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    // ..
  });