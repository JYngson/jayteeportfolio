import React from "react";
import { Home, Vulkan } from "./components";
import "./App.scss";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Router path="Vulkan" component={Vulkan}></Router>
        </Switch>
      </div>
    </Router>
  );
}
