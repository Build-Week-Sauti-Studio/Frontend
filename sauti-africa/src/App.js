import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
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
      <PrivateRoute path="real-sauti-studio.herokuapp.com/api/users" component={Dashboard} />
      <Route exact path="/" component={Login} />
      <Route exact path="/" component={Register} />
      </Switch>
    </div>
  </Router>
  );
}

export default App;
