import React from "react";
import responfirst from "./images/firstpagebackground.png";
import separator from "./images/separatorWhite.png";
import instagram from "./images/instagramrespon.png";
import twitter from "./images/twitterrepon.png";
import linkedin from "./images/linkedinrespon.png";

export default function Responsive() {
  return (
    <>
      <div>
        <div className="firstpagerespon"></div>
        <img className="responimg" src={responfirst} />
        <div className="text-overlay">my name is Talib</div>
        <h2 className="developertext">I'M A DEVELOPER</h2>
        <img className=" separatorrepon " src={separator} />
        <div className=" threerespon ">
          <img className="instagramimg" src={instagram} />
          <img className="twitterimg" src={twitter} />
          <img className="linkedinimg" src={linkedin} />
        </div>
      </div>
    </>
  );
}
