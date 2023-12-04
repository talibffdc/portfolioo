

// Hamburger.js
// Hamburger.js

import React from 'react';
import './Hamburger.css';

const Hamburger = ({ onClick }) => {
  return (
    <div className="hamburger" onClick={onClick}>
      <div className="line"></div>
      <div className="line"></div>
      <div className="line"></div>
    </div>
  );
};

export default Hamburger;
