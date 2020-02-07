
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Dashboard from "./components/Dashboard";
import PrivateRoute from './components/PrivateRoute'
import './App.css';


import {IdeaContext} from "./contexts/IdeaContext";

// , updateIdeas, history

function App() {
  const [ideas] = useState();
  return (
    <Router>
    <div className="App">
    <IdeaContext.Provider value={{ ideas }}>
    <div className="header">
        <h1>Welcome to Sauti Studio </h1>
      </div>
      <div className="links-container">
        <Link className="links" to="/login">Login</Link> 
        <Link className="links" to="/register">Register</Link> 
      </div>
      <Switch>
      <PrivateRoute path="/dashboard" component={Dashboard} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      </Switch>
      </IdeaContext.Provider>
    </div>
  
  </Router>
  );
}

export default App;
