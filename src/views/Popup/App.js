import React from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Login from "./login.component";
import SignUp from "./signup.component";

import firebase from "firebase";
import "firebase/auth";
import Dashboard from './Dashboard';


var config = {
    apiKey: "AIzaSyC8kK6cZKx5dCZh2w2-zGV7m-emZGy_2d4",
    authDomain: "webmetrix-318213.firebaseapp.com",
};
var app = firebase.initializeApp(config);

function App() {
  return (<Router>
    <div className="App">
          <Switch>
            <Route exact path='/' component={Login} />
            <Route path="/sign-in" component={Login} />
            <Route path="/sign-up" component={SignUp} />
            <Route path="/dashboard" component={Dashboard} />
          </Switch>
          </div>
        </Router>
  );
}

export default App;
