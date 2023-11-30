import React from 'react';
import './navbarstyle.css';

export default function Navbar() {
  return (
    <div>
      <div>
        <nav className="navbar">
          <ul className='list'>
            <li><a href="/contact">CONTACT ME</a></li>
            <li><a href="/portfolio">Portfolio</a></li>
            <li><a href="/skills">Skills</a></li>
            <li><a href="/">About me</a></li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
