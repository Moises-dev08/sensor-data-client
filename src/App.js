import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginScreen from "./screen/login/LoginScreen";
import HomeScreen from "./screen/home/HomeScreen";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/home" component={HomeScreen} />

          <Route exact path="/" component={LoginScreen} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
