import React, { useState } from "react";
import { Background, Navbar, Vulkan } from "./components";
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
            to="/Vulkan"
            render={(galleryData) => <Vulkan galleryData={galleryData} />}
          />
        </Switch>
      </div>
    </Router>
  );
}
