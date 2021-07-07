import React, { useState } from "react";
import { Background, Navbar, Vulkan } from "./components";
import "./App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function App() {
  const [background, setBackground] = useState("Black");
  const [visible, setVisible] = useState("Hidden");
  return (
    <Router>
      <div className="App">
        <Navbar setBackground={setBackground} setVisible={setVisible} />
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <Background background={background} visible={visible} />
            )}
          ></Route>
          <Route to="/Vulkan" component={Vulkan}></Route>
        </Switch>
      </div>
    </Router>
  );
}
