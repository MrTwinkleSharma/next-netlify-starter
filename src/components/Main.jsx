import React, { useState } from "react";
import Banner from "./Banner";
import VideoPart from "./VideoPart";

// import videoFirst from "../../public/assets/videoFirst.mp4";
// import videoSecond from "../../public/assets/videoSecond.mp4";
// import videoThird from "../../public/assets/videoThird.mp4";

const videoFirst = 'assets/videoFirst.mp4';
const videoSecond = 'assets/videoSecond.mp4';
const videoThird = 'assets/videoThird.mp4';

function Main() {
  const [one, setOne] = useState(true)
  const [two, setTwo] = useState(true)

  if (typeof window !== "undefined") {
     function calculateScrollCount() {

      if (window.scrollY >= 0 && window.scrollY < 1060) {
        setOne(true)
        setTwo(true)

      } else if (window.scrollY > 1068 && window.scrollY < 1900) {
        setOne(true)
        setTwo(false)

      } else if (window.scrollY > 1900) {
        setOne(false)
        setTwo(false)
      }

      console.log(window.scrollY)
    }

    window.addEventListener("scroll", calculateScrollCount)

  }
  return (
    <div className="main">
      <Banner />
      {(one === true && two === true) && <VideoPart updateVideo={videoFirst} />}
      {(one === true && two === false) && <VideoPart updateVideo={videoSecond} />}
      {(one === false && two === false) && <VideoPart updateVideo={videoThird} />}
    </div>
  );
}
export default Main;