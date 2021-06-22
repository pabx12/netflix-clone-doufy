import React, { useEffect, useState } from 'react';
import './App.css';
import HomePage from './components/HomePage';
import Welcome from './components/Welcome';
import Login from './components/Login';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import app from './firebase';
import { useSelector, useDispatch } from 'react-redux';
import { loginSuccess, selectIsLogin} from './features/auth/authSlice'

function App() {
 const [emailError, setEmailError] = useState('')
 const [passwordError, setPasswordError] = useState('')
 const [hasAccount, setHasAccount] = useState(false)
 const  isLogin = useSelector(selectIsLogin)
 const dispatch = useDispatch()

  const handleLogin = (email, password) => {
    app
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      var user = userCredential.user;
      user = JSON.stringify(user)
      dispatch(loginSuccess({user}))
    })
    .catch(err => {
      switch(err.code){
        case "auth/invalid-email":
        case "auth/user-disabled":
        case "auth/user-not-found":
          setEmailError(err.message)
          break;
        case "auth/wrong-password":
          setPasswordError(err.message)
          break;
      }})
  }
  const handleSignUp = (email, password) => {
    app
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .catch(err => {
      switch(err.code){
        case "auth/email-already-use":
        case "auth/invalid-email":
          setEmailError(err.message)
          break;
        case "auth/weak-password":
          setPasswordError(err.message)
          break;
      }})
  }
  const handleLogOut = () => {
    app.auth().signOut().then(() => {
    }).catch((error) => {
      // An error happened.
    });
  }
  const authListener = () => {
    app.auth().onAuthStateChanged(user => {
      if(user){
       dispatch(loginSuccess({user}))
      }
      else{
        

      }
    })
  }
  useEffect(() => {
   authListener()
    return () => {
    
    }
  }, [])
  return (
    <div className="app">
      <Router>
      <Switch>
          <Route path="/login">
            <Login 
              emailError={emailError}
              passwordError={passwordError}
              handleLogin={handleLogin}
              handleSignUp={handleSignUp}
              hasAccount={hasAccount}
              setHasAccount={setHasAccount}
            />
          </Route>
          <Route path="/">
            {isLogin ? (<HomePage handleLogOut={handleLogOut}/>) : (<Welcome/>)}
          </Route>
        </Switch>
    </Router>
    </div>
  );
}

export default App;
