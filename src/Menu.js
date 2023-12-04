// Menu.js

// import React from 'react';
// import './Menu.css';

// const Menu = ({ isOpen, onClose }) => {
//   return (
//     <div className={`menu ${isOpen ? 'open' : ''}`}>
//       <div className="menu-item" onClick={onClose}>
//         About me
//       </div>
//       <div className="menu-item" onClick={onClose}>
//         Skills
//       </div>
//       <div className="menu-item" onClick={onClose}>
//         Portfolio
//       </div>
//       <div className="menu-item" onClick={onClose}>
//         Contact Me
//       </div>
//     </div>
//   );
// };

// export default Menu;


// Menu.js

// import React from 'react';
// import './Menu.css';

// const Menu = ({ isOpen, onClose }) => {
//   return (
//     <div className={`menu ${isOpen ? 'open' : ''}`}>
//       <button className="close-btn" onClick={onClose}>
//         &times; {/* Use the "times" character (×) to represent a cross */}
//       </button>
//       <div className="menu-item" onClick={onClose}>
//         About
//       </div>
//       <div className="menu-item" onClick={onClose}>
//         Contact
//       </div>
//       <div className="menu-item" onClick={onClose}>
//         Portfolio
//       </div>
//       <div className="menu-item" onClick={onClose}>
//         Skills
//       </div>
//     </div>
//   );
// };

// export default Menu;



// Menu.js

import React from 'react';
import './Menu.css';

const Menu = ({ isOpen, onClose }) => {
  return (
    
    <div className={`menu ${isOpen ? 'open' : ''}`}>
      <button className="close-btn" onClick={onClose}>
        &times;
      </button>
      <div className="menu-item" onClick={onClose}>
        About
      </div>
      <div className="menu-item" onClick={onClose}>
        Contact
      </div>
      <div className="menu-item" onClick={onClose}>
        Portfolio
      </div>
      <div className="menu-item" onClick={onClose}>
        Skills
      </div>
    </div>
  );
};

export default Menu;
