// import React from "react";
// import "./aboutstyle.css";
// import imgseparator from "./images/separatorBlack 1.png";

// export default function About() {
//   return (
//     <>
//       <div className="itberriesall">
//         <h2>IT BERRIES</h2>
//         <p>
//           {" "}
//           Nulla in velit a metus rhoncus tempus. Nulla congue nulla vel sem
//           varius finibus. Sed ornare sit amet lorem sed viverra. In vel urna
//           quis libero viverra <br /> facilisis ut ac est.Nulla in velit a metus
//           rhoncus tempus. Nulla congue nulla vel sem varius finibus. Sed ornare
//           sit amet lorem sed viverra. In vel urna quis libero viverra facilisis
//           ut ac est.
//         </p>

//         <button className="readmore">READ MORE</button>
//       </div>

//       <div className="background">
//         <div>
//           <h2 className="about">ABOUT ME</h2>

//           <p className="textnulla">
//             Nulla in velit a metus rhoncus tempus. Nulla congue nulla vel sem
//             varius finibus. Sed ornare sit amet lorem sed viverra. In vel urna
//             quis libero viverra facilisis ut ac est. Nulla in velit a metus
//             rhoncus tempus. Nulla congue nulla vel sem varius finibus.
//           </p>

//           <h5 className="explore">EXPLORE</h5>

//           <img className="imgseparator" src={imgseparator} />

//           <div className="both">

//             <div className="design">
//               <h2 className="designtext">DESIGN</h2>
//               <p className="abouttextsize">
//                 I can designed the site based on your needs and suggestions I
//                 can also designed the site from scratch and consult you during
//                 the job
//               </p>
//             </div>
//             <div className="development">
//               <h2 className="developmenttext">DEVELOPMENT</h2>
//               <p className="abouttextsize">
//                 I can designed the site based on your needs and suggestions I
//                 can also designed the site from scratch and consult you during
//                 the job
//               </p>
//             </div>
//           </div>
//           <div className="maintenanceall">
//             <h2 className="maintenance">MAINTENANCE </h2>
//             <p className="maintenancetext">
//               I can designed the site based on your needs and suggestions I can
//               also designed the site from scratch and consult you during the job.
//             </p>

//             <img className="imgseparatordown" src={imgseparator} />

//           </div>
//         </div>
//       </div>
//     </>
//   );
// }


// About.js

import React from "react";
import "./aboutstyle.css";
import imgseparator from "./images/separatorBlack 1.png";
import Responsive from "./Responsive";

export default function About() {
  return (
    <>
    
    <Responsive/>
      <div className="itberriesall">
        <h2>IT BERRIES</h2>
        <p>
          Nulla in velit a metus rhoncus tempus. Nulla congue nulla vel sem
          varius finibus. Sed ornare sit amet lorem sed viverra. In vel urna
          quis libero viverra facilisis ut ac est.Nulla in velit a metus
          rhoncus tempus. Nulla congue nulla vel sem varius finibus. Sed ornare
          sit amet lorem sed viverra. In vel urna quis libero viverra facilisis
          ut ac est.
        </p>
        <button className="readmore">READ MORE</button>
      </div>

      <div className="background">
        <div>
          <h2 className="about">ABOUT ME</h2>
          <p className="textnulla">
            Nulla in velit a metus rhoncus tempus. Nulla congue nulla vel sem
            varius finibus. Sed ornare sit amet lorem sed viverra. In vel urna
            quis libero viverra facilisis ut ac est. Nulla in velit a metus
            rhoncus tempus. Nulla congue nulla vel sem varius finibus.
          </p>
          <h5 className="explore">EXPLORE</h5>
          <img className="imgseparator" src={imgseparator} />
          <div className="both">
            <div className="design">
              <h2 className="designtext">DESIGN</h2>
              <p className="abouttextsize">
                I can design the site based on your needs and suggestions. I can
                also design the site from scratch and consult you during the job.
              </p>
            </div>
            <div className="development">
              <h2 className="developmenttext">DEVELOPMENT</h2>
              <p className="abouttextsize">
                I can develop the site based on your needs and suggestions. I can
                also develop the site from scratch and consult you during the job.
              </p>
            </div>
          </div>
          <div className="maintenanceall">
            <h2 className="maintenance">MAINTENANCE </h2>
            <p className="maintenancetext">
              I can maintain the site based on your needs and suggestions. I can
              also maintain the site from scratch and consult you during the job.
            </p>
            <img className="imgseparatordown" src={imgseparator} />
          </div>
        </div>
      </div>
    </>
  );
}
