import React from 'react'
import img1 from "./imagesoffooter/arrow.svg"
import img2 from "./imagesoffooter/facebook.svg"
import img3 from "./imagesoffooter/linkedin.svg"
import img4 from "./imagesoffooter/instagram.svg"
import img5 from "./imagesoffooter/mail.svg"



export default function Footer() {
  return (
    <div className="all">
        <div>
            <img  className="img1footer" src={img1}/>
        </div>
        <div className="backtotop">
            <h6>BACK TO TOP</h6>
        </div>

        <div className="footerimages" > 

            <img  className="img2footer" src={img2}/>

            <img className="img3footer" src={img3}/>
            <img className="img4footer" src={img4}/>
            <img className="img5footer" src={img5}/>

        </div>

        <div> <p>@2020 Tomasz Gajda All Rights <br/> Reserved.</p> </div>

    </div>
  )
}
