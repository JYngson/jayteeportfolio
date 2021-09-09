import React, { useState } from "react";
import "./App.scss";
import {
  Background,
  Navbar,
  Portfolio,
  Jewelry,
  Customs,
  About,
} from "./components";
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

//Talasay Pic Import
import { talaysayData } from "./data/TalaysayImageData";
import talaysay from "./assets/images/Talaysay (May 2021)/Additional 10/Talasay.png";
import mobileTalaBack1 from "./assets/images/Talaysay (May 2021)/Additional 10/IMG_5428.JPG";
import mobileTalaBack2 from "./assets/images/Talaysay (May 2021)/Additional 10/IMG_5420.JPG";
import mobileTalaBack3 from "./assets/images/Talaysay (May 2021)/Additional 10/IMG_5414.JPG";
import mobileTalaHero from "./assets/images/Talaysay (May 2021)/Additional 10/IMG_5416.JPG";

//Lulu Pic Import
import { luluData } from "./data/LuluImageData";
import lulu from "./assets/images/Lulu (July 2021)/Additional 10/Lulu.png";
import mobileLuluBack1 from "./assets/images/Lulu (July 2021)/Top 10/20210713-GIL_8430.JPG";
import mobileLuluBack2 from "./assets/images/Lulu (July 2021)/Top 10/20210713-GIL_7961.JPG";
import mobileLuluBack3 from "./assets/images/Lulu (July 2021)/Additional 10/20210713-GIL_8145.JPG";
import mobileLuluHero from "./assets/images/Lulu (July 2021)/Additional 10/20210713-GIL_8366.JPG";

//Justin Pic Import
import { justinData } from "./data/JustinImageData";
import justin from "./assets/images/Justin (March 2021)/Additional 10/Justin.png";
import mobileJustinBack1 from "./assets/images/Justin (March 2021)/Additional 10/20210321-GIL_9675.JPG";
import mobileJustinBack2 from "./assets/images/Justin (March 2021)/Top 10/20210321-GIL_0140.JPG";
import mobileJustinBack3 from "./assets/images/Justin (March 2021)/Top 10/20210321-GIL_0121.JPG";
import mobileJustinHero from "./assets/images/Justin (March 2021)/Top 10/20210321-GIL_9988.JPG";

export default function App() {
  const [background, setBackground] = useState("Black");
  const [visible, setVisible] = useState("Hidden");

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
                galleryData={vulkanData}
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
                galleryData={reminiscentData}
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
            <Route exact path="/Customs">
              <Customs />
            </Route>

            <Route exact path="/Talaysay">
              <Jewelry
                galleryData={talaysayData}
                background1={talaysay}
                mobileBack1={mobileTalaBack1}
                mobileBack2={mobileTalaBack2}
                mobileBack3={mobileTalaBack3}
                mobileHero={mobileTalaHero}
                color="yellow"
                name="Talaysay"
              />
            </Route>

            <Route exact path="/Lulu">
              <Jewelry
                galleryData={luluData}
                background1={lulu}
                mobileBack1={mobileLuluBack1}
                mobileBack2={mobileLuluBack2}
                mobileBack3={mobileLuluBack3}
                mobileHero={mobileLuluHero}
                color="rgba(252, 205, 124)"
                name="Lulu"
              />
            </Route>

            <Route exact path="/Justin">
              <Jewelry
                galleryData={justinData}
                background1={justin}
                mobileBack1={mobileJustinBack1}
                mobileBack2={mobileJustinBack2}
                mobileBack3={mobileJustinBack3}
                mobileHero={mobileJustinHero}
                color="rgba(95, 166, 186)"
                name="Justin"
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
