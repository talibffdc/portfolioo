// import React from "react";
// import imgtalib from "./components/images/WhatsApp_Image_2021-08-27_at_7.18.08_AM-removebg-preview.png";
// import imgat from "./components/images/at.png";
// import imginsta from "./components/images/insta.png";
// import imgtwi from "./components/images/twi.png";
// import logo from "./components/images/logo 1.png";

// export default function Firstpage() {
//   return (
//     <>
//       <div className="firstpageitem">

//         <div className="frontendimg">
//           <img className=" logo" src={logo} />
//           <div className="text">
//             <h2>Hi, I am</h2>
//             <h1>Mohd Talib Mansoori</h1>
//             <p className="frontendfonttext">Front-End Developer</p>
//           </div>

//           <div className="imgfront">
//             <img className="imgat" src={imgat} />
//             <img className="imginsta" src={imginsta} />
//             <img className="imgtwi" src={imgtwi} />
//           </div>
//         </div>

//         <div className="imgtalib">
//           <img src={imgtalib} />
//         </div>

//       </div>
//     </>
//   );
// }


// Firstpage.js

import React from "react";
import imgtalib from "./components/images/WhatsApp_Image_2021-08-27_at_7.18.08_AM-removebg-preview.png";
import imgat from "./components/images/at.png";
import imginsta from "./components/images/insta.png";
import imgtwi from "./components/images/twi.png";
import logo from "./components/images/logo 1.png";
import Navbar from "./components/Navbar"

export default function Firstpage() {
  return (
    <>
      <div className="firstpageitem">
        <div className="frontendimg">
          
          <img className="logo" src={logo} alt="Logo" />
          <div className="text">
            <h2>Hi, I am</h2>
            <h1>Mohd Talib Mansoori</h1>
            <p className="frontendfonttext">Front-End Developer</p>
          </div>

          <div className="imgfront">
            <img className="imgat" src={imgat} alt="Twitter" />
            <img className="imginsta" src={imginsta} alt="Instagram" />
            <img className="imgtwi" src={imgtwi} alt="LinkedIn" />
          </div>
        </div>

        <div className="imgtalib">
          <div className="navbarimg">
        <Navbar/>
        </div>
          <img src={imgtalib} alt="Mohd Talib Mansoori" />
        </div>
      </div>
    </>
  );
}
