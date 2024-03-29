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
import { difData } from "./data/DifImageData";
import difBack1 from "./assets/images/Vulkan/IMG_9486.jpg";
import difBack2 from "./assets/images/SevenTeenTwentyThree/IMG_9850.JPG";
import difBack3 from "./assets/images/SevenTeenTwentyThree/IMG_2899.JPG";
import mobileDifBack1 from "./assets/images/Vulkan/IMG_0061.JPG";
import mobileDifBack2 from "./assets/images/Vulkan/IMG_9186.jpg_new_.jpg";
import mobileDifBack3 from "./assets/images/SevenTeenTwentyThree/s.3.jpg";
import mobileDifHero from "./assets/images/SevenTeenTwentyThree/IMG_9850.JPG";

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
import talaysay from "./assets/images/Talaysay (May 2021)/Additional 10/Talaysay.jpg";
import mobileTalaBack1 from "./assets/images/Talaysay (May 2021)/Additional 10/IMG_5428.JPG";
import mobileTalaBack2 from "./assets/images/Talaysay (May 2021)/Additional 10/IMG_5420.JPG";
import mobileTalaBack3 from "./assets/images/Talaysay (May 2021)/Additional 10/IMG_5414.JPG";
import mobileTalaHero from "./assets/images/Talaysay (May 2021)/Additional 10/IMG_5416.JPG";

//Lulu Pic Import
import { luluData } from "./data/LuluImageData";
import lulu from "./assets/images/Lulu (July 2021)/Additional 10/Lulu.jpg";
import mobileLuluBack1 from "./assets/images/Lulu (July 2021)/Top 10/20210713-GIL_8430.JPG";
import mobileLuluBack2 from "./assets/images/Lulu (July 2021)/Top 10/20210713-GIL_7961.JPG";
import mobileLuluBack3 from "./assets/images/Lulu (July 2021)/Additional 10/20210713-GIL_8145.JPG";
import mobileLuluHero from "./assets/images/Lulu (July 2021)/Additional 10/20210713-GIL_8366.JPG";

//Justin Pic Import
import { justinData } from "./data/JustinImageData";
import justin from "./assets/images/Justin (March 2021)/Additional 10/Justin.jpg";
import mobileJustinBack1 from "./assets/images/Justin (March 2021)/Additional 10/20210321-GIL_9675.JPG";
import mobileJustinBack2 from "./assets/images/Justin (March 2021)/Top 10/20210321-GIL_0140.JPG";
import mobileJustinBack3 from "./assets/images/Justin (March 2021)/Top 10/20210321-GIL_0121.JPG";
import mobileJustinHero from "./assets/images/Justin (March 2021)/Top 10/20210321-GIL_9988.JPG";

import { amaraData } from "./data/AmaraImageData";
import amara from "./assets/images/Amara (July 2021)/Additional 10/Amara.jpg";
import mobileAmaraBack1 from "./assets/images/Amara (July 2021)/Top 10/100-20210716-KingdomxAmara.jpg";
import mobileAmaraBack2 from "./assets/images/Amara (July 2021)/Top 10/123-20210716-KingdomxAmara.jpg";
import mobileAmaraBack3 from "./assets/images/Amara (July 2021)/Top 10/115-20210716-KingdomxAmara.jpg";
import mobileAmaraHero from "./assets/images/Amara (July 2021)/Top 10/79-20210716-KingdomxAmara.jpg";

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

            <Route exact path="/Differentiate">
              <Portfolio
                galleryData={difData}
                background1={difBack1}
                background2={difBack2}
                background3={difBack3}
                mobileBack1={mobileDifBack1}
                mobileBack2={mobileDifBack2}
                mobileBack3={mobileDifBack3}
                mobileHero={mobileDifHero}
                name="Differentiate"
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
                name="Justin"
              />
            </Route>

            <Route exact path="/Amara">
              <Jewelry
                galleryData={amaraData}
                background1={amara}
                mobileBack1={mobileAmaraBack1}
                mobileBack2={mobileAmaraBack2}
                mobileBack3={mobileAmaraBack3}
                mobileHero={mobileAmaraHero}
                name="Amara"
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
