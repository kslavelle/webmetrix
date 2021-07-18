import * as React from "react";
import logo from "./logo.svg";
import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Login from "./views/Login";
import Register from "./views/Register";
import Dashboard from "./views/Dashboard";

import firebase from "firebase";
import "firebase/auth";

var config = {
  apiKey: "AIzaSyC8kK6cZKx5dCZh2w2-zGV7m-emZGy_2d4",
  authDomain: "webmetrix-318213.firebaseapp.com",
};
var app = firebase.initializeApp(config);

const App = () => {
  return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/sign-in" component={Login} />
          <Route path="/sign-up" component={Register} />
          <Route path="/dashboard" component={Dashboard} />
        </Switch>
      </div>
  );
};

export default App;
