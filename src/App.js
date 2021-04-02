import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginScreen from "./screen/login/LoginScreen";
import HomeScreen from "./screen/home/HomeScreen";
import NewClientScreen from "./screen/newClient/NewClientScreen";
import ClientsListScreen from "./screen/clientsList/ClientsListScreen";
import DeleteClientScreen from "./screen/deleteClient/DeleteClientScreen";
import UpdateClientScreen from "./screen/updateClient/UpdateClientScreen";
import MapScreen from "./screen/map/MapScreen";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/home" component={HomeScreen} />

          <Route exact path="/newClient" component={NewClientScreen} />

          <Route exact path="/clientsList" component={ClientsListScreen} />

          <Route exact path="/deleteClient" component={DeleteClientScreen} />

          <Route exact path="/updateClient" component={UpdateClientScreen} />

          <Route exact path="/map" component={MapScreen} />

          <Route exact path="/" component={LoginScreen} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
