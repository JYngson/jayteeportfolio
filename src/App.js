import React, { useState } from "react";
import { Background, Navbar, Vulkan, About } from "./components";
import "./App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { data } from "./data/VulkanImageData";

export default function App() {
  const [background, setBackground] = useState("Black");
  const [visible, setVisible] = useState("Hidden");
  const [galleryData] = useState(data);

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
          <Route
            exact
            path="/Vulkan"
            render={(galleryData) => <Vulkan galleryData={galleryData} />}
          />
          <Route component={About} exact path="/about" />
        </Switch>
      </div>
    </Router>
  );
}
