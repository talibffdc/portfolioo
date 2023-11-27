import React from 'react'
import './navbarstyle.css'

export default function Navbar() {
  return (
    <div>

        <div>
        <nav className="navbar" >
          <ul className='list'>

            <li><a href="/contact">CONTACT ME</a></li>
            <li><a href="/contact">Portfolio</a></li>
            <li><a href="/about">Skills</a></li>
            <li><a href="/">About me</a></li>



          </ul>
        </nav>
        </div>
      
    </div>
  )
}
