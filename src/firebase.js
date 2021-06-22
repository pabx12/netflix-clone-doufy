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

const actionCodeSettings = {
  // URL you want to redirect back to. The domain (www.example.com) for this
  // URL must be in the authorized domains list in the Firebase Console.
  url: 'http://localhost:3000',
  // This must be true.
  handleCodeInApp: true,
};
export {actionCodeSettings}

export default app
