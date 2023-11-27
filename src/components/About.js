import React from "react";
import "./aboutstyle.css";
import imgseparator from "./images/separatorBlack 1.png"

export default function About() {
  return (
    <>


    <div className="itberriesall"> 
      <h2>IT BERRIES</h2>
      <p> Nulla in velit a metus rhoncus tempus. Nulla congue nulla vel sem varius finibus. Sed ornare sit amet lorem sed viverra. In vel urna quis libero viverra facilisis ut ac est.</p>

    </div>

    <body className="background" >

      <div>
        <h2 className="about">ABOUT ME</h2>
       
        <p className="textnulla">
          Nulla in velit a metus rhoncus tempus. Nulla congue nulla vel sem
          varius finibus. Sed ornare sit amet lorem sed viverra. In vel urna
          quis libero viverra facilisis ut ac est.
        </p>

        <h5 className="explore">EXPLORE</h5>
        <img className="imgseparator" src={imgseparator}/>

        <div className="both">
          <div className="design">
            <h2>Design</h2>
            <p>I can designed the site based on your needs and suggestions I can also designed the  site from scratch and consult you during the job </p>
          </div>
          <div>
            <h2 className="developmenttext">Development</h2>
            <p>I can designed the site based on your needs and suggestions I can also designed the  site from scratch and consult you during the job </p>
          </div>
          
        </div>
        <div className="maintenanceall"> 
          <h2>MAINTENANCE </h2>
        <p className="textmaintenance">I can designed the site based on your needs and suggestions I can also designed the site from scratch and consult you during the job</p> 
        </div>
      </div>
      </body>
    </>
    
  );
}
