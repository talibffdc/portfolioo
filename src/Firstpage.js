import React from 'react'
import imgtalib from './components/images/WhatsApp_Image_2021-08-27_at_7.18.08_AM-removebg-preview.png'
import imgat from './components/images/at.png'
import imginsta from './components/images/insta.png'
import imgtwi from './components/images/twi.png'
import logo from './components/images/logo 1.png'


export default function Firstpage() {
  return (
    <>
    <div className="firstpageitem">
      
        <img className=" logo" src={logo}/>
        
        <div className="text">
        <h3>Hi, I am</h3>
        <h2>Mohd Talib Mansoori</h2>
        <p>Front-End Developer</p>
        </div>

        <div>
           <img src={imgat}/>
            <img src={imginsta}/>
            <img src={imgtwi}/>
        </div>


        <div className="imgtalib">
            <img src={imgtalib}/>
        </div>

      
    </div>
    </>
  )
}
