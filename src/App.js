import React, { useState } from 'react';
import './App.css';
import HomePage from './components/HomePage';
import Welcome from './components/Welcome';
import Login from './components/Login';
import Register from './components/Register';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


function App() {
  const [isLogin] = useState(false)
  return (
    <div className="app">
      <Router>
      <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/">
            {isLogin ? (<HomePage/>) : (<Welcome/>)}
          </Route>
        </Switch>
    </Router>
    </div>
  );
}

export default App;
