import React, { useState } from "react";
import "./App.scss";
import { Background, Navbar, Vulkan, About, Test } from "./components";
import { AnimatePresence } from "framer-motion";
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
        <AnimatePresence>
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
            <Route component={Test} exact path="/test" />
          </Switch>
        </AnimatePresence>
      </div>
    </Router>
  );
}
