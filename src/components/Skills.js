import React from 'react'
import img1 from "./images/html.svg"
import img2 from "./images/css.svg"
import img3 from "./images/sass.svg"
import img4 from "./images/javascript.svg"
import img5 from "./images/react.svg"
import img6 from "./images/bootstrap.svg"
import img7 from "./images/git.svg"
import img8 from "./images/figma.svg"
import img9 from "./images/nodejs.png"
import img10 from "./images/mysql.svg"
import img11 from "./images/mongodb.png"
import img12 from "./images/typescript.png"
import img13 from "./images/engielski.svg"
import img14 from "./images/hiszpanski.svg"
import img15 from "./images/c++.svg"
import img16 from "./images/c.svg"

export default function Skills() {
  return (
    <>
    <div className="backgroundskills">
    <div>

        <h2 className="skills">S K I L L S</h2>

     </div>

    <div>
        <h4 className="usingnow">USINIG NOW :</h4>
    </div>
    <div className="htmlimg"> 
    <img className="img1" src={img1}/>
    {/* <h5>HTML5</h5> */}
    <img className="img2" src={img2}/>
    {/* <h5>CSS3</h5> */}
    <img className="img3" src={img3}/>
    {/* <h5>SASS</h5> */}
    <img className="img4" src={img4}/>
    {/* <h5>JAVASCRIPT</h5> */}
    </div>



        <div className="reactimg">
        <img className="img5" src={img5}/>
        <img className="img6"src={img6}/>
        <img className="img7" src={img7}/>
        <img className="img8" src={img8}/>
        </div>

  

        <div>
            <h4 className="learning">LEARNING :</h4>
        </div>
       
        <div className="jsimg">
        <img className="img9" src={img9}/>
        <img className="img10" src={img10}/>
        <img className="img11" src={img11}/>
        <img className="img12"src={img12}/>
        </div>

        <div>
            <h4 className="other">OTHER SKILLS :</h4>
        </div>
            <div className="cimg">
            <img className="img13" src={img13}/>
            <img className="img14" src={img14}/>
            <img className="img15" src={img15}/>
            <img className="img16" src={img16}/>
            </div>


        </div>

    </>
  )
}
