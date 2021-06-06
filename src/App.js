import React, { useState } from "react";
import { Navbar, Background } from "./components";
import "./App.scss";

export default function App() {
  const [background, setBackground] = useState("color");

  return (
    <div className="App">
      <Navbar />
      <Background />
    </div>
  );
}
