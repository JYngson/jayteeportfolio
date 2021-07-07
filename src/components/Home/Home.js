import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import Background from "../Background/Background";

export default function Home() {
  const [background, setBackground] = useState("Black");
  const [visible, setVisible] = useState("Hidden");
  return (
    <div>
      <Navbar setBackground={setBackground} setVisible={setVisible} />
      <Background background={background} visible={visible} />
    </div>
  );
}
