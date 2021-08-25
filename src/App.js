import React, { useState } from "react";
import "./App.scss";
import { Background, Navbar, Portfolio, About } from "./components";
import { AnimatePresence } from "framer-motion";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//Vulkan Pic Imports
import { vulkanData } from "./data/VulkanImageData";
import vulkanBack1 from "./assets/images/Vulkan/IMG_9486.jpg";
import vulkanBack2 from "./assets/images/SevenTeenTwentyThree/IMG_9850.JPG";
import vulkanBack3 from "./assets/images/SevenTeenTwentyThree/IMG_2899.JPG";
import mobileVulkanBack1 from "./assets/images/Vulkan/IMG_0061.JPG";
import mobileVulkanBack2 from "./assets/images/Vulkan/IMG_9186.jpg_new_.jpg";
import mobileVulkanBack3 from "./assets/images/SevenTeenTwentyThree/s.3.jpg";
import mobileVulkanHero from "./assets/images/SevenTeenTwentyThree/IMG_9850.JPG";

//Reminiscent Pic Imports
import { reminiscentData } from "./data/ReminiscentImageData";
import remBack1 from "./assets/images/Reminiscent/IMG_3151.JPG";
import remBack2 from "./assets/images/Reminiscent/Top 10/IMG_5877.JPG";
import remBack3 from "./assets/images/Reminiscent/Top 10/IMG_5873.JPG";
import mobileRemBack1 from "./assets/images/Reminiscent/Top 10/IMG_2940.JPG";
import mobileRemBack2 from "./assets/images/Reminiscent/IMG_6443.JPG";
import mobileRemBack3 from "./assets/images/Reminiscent/IMG_3133.JPG";
import mobileRemHero from "./assets/images/Reminiscent/Top 10/IMG_2939.JPG";

export default function App() {
  const [background, setBackground] = useState("Black");
  const [visible, setVisible] = useState("Hidden");
  const [vulkan] = useState(vulkanData);
  const [reminiscent] = useState(reminiscentData);

  return (
    <Router>
      <div className="App">
        <Navbar setBackground={setBackground} setVisible={setVisible} />
        <AnimatePresence>
          <Switch>
            <Route exact path="/">
              <Background background={background} visible={visible} />
            </Route>

            <Route exact path="/Vulkan">
              <Portfolio
                galleryData={vulkan}
                background1={vulkanBack1}
                background2={vulkanBack2}
                background3={vulkanBack3}
                mobileBack1={mobileVulkanBack1}
                mobileBack2={mobileVulkanBack2}
                mobileBack3={mobileVulkanBack3}
                mobileHero={mobileVulkanHero}
                name="Vulkan"
              />
            </Route>

            <Route exact path="/Reminiscent">
              <Portfolio
                galleryData={reminiscent}
                background1={remBack1}
                background2={remBack2}
                background3={remBack3}
                mobileBack1={mobileRemBack1}
                mobileBack2={mobileRemBack2}
                mobileBack3={mobileRemBack3}
                mobileHero={mobileRemHero}
                name="Reminiscent"
              />
            </Route>

            <Route exact path="/about">
              <About />
            </Route>
          </Switch>
        </AnimatePresence>
      </div>
    </Router>
  );
}
