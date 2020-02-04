import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import PrivateRoute from './components/PrivateRoute'
import './App.css';


function App() {
  return (
    <Router>
    <div className="App">
    <div className="header">
        <h1>Welcome to Sauti Studio </h1>
      </div>
      <Switch>
      <PrivateRoute path="/ideas" component={Dashboard} />
      <Route exact path="/" component={Login} />
      </Switch>
    </div>
  </Router>
  );
}

export default App;
