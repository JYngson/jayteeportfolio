import React, { useState } from "react";
import { Navbar, Background } from "./components";
import "./App.scss";

export default function App() {
  const [background, setBackground] = useState("Black");
  const [visible, setVisible] = useState("Hidden");

  return (
    <div className="App">
      <Navbar setBackground={setBackground} setVisible={setVisible} />
      <Background background={background} visible={visible} />
    </div>
  );
}
