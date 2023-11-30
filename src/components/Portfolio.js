// import React from 'react'
// import img1portfolio from './images/1.png'
// import img2portfolio from './images/2.png'
// import img3portfolio from './images/3.png'
// import img4portfolio from './images/4.png'
// import img5portfolio from './images/5.png'
// import img6portfolio from './images/6.png'


// export default function Portfolio() {
//   return (
//     <>
//     <div>
//       <div className="portfolio">
//         <h3 className="portfoliotext">P O R T F O L I O</h3>
//       </div>

//       <div className="portfolioattribute">
//         <div>
//           <p>ALL</p>  
//         </div>
//         <div>
//             <p>CODED</p>
//             </div>
//         <div>
//             <p>DESIGNED</p>
//         </div>
//       </div>
//       <div className='imgcolumn'>
//         <img src={img1portfolio}/>
//         <img src={img2portfolio}/>
//         <img src={img3portfolio}/>
//       </div>

//       <div className='imgcolumn'>

//       <img src={img4portfolio}/>
//         <img src={img5portfolio}/>
//         <img src={img6portfolio}/>
        
//       </div>

//       <div className="graystrip">
//         <h5>And many more to come!

//         </h5>
//       </div>




//     </div>
//     </>
//   )
// }




import React from 'react';
import img1portfolio from './images/1.png';
import img2portfolio from './images/2.png';
import img3portfolio from './images/3.png';
import img4portfolio from './images/4.png';
import img5portfolio from './images/5.png';
import img6portfolio from './images/6.png';

export default function Portfolio() {
  return (
    <div>
      <div className="portfolio">
        <h3 className="portfoliotext">P O R T F O L I O</h3>
      </div>

      <div className="portfolioattribute">
        <div>
          <p>ALL</p>
        </div>
        <div>
          <p>CODED</p>
        </div>
        <div>
          <p>DESIGNED</p>
        </div>
      </div>

      <div className='imgcolumn'>
        <img src={img1portfolio} alt="Portfolio Item 1" />
        <img src={img2portfolio} alt="Portfolio Item 2" />
        <img src={img3portfolio} alt="Portfolio Item 3" />
      </div>

      <div className='imgcolumn'>
        <img src={img4portfolio} alt="Portfolio Item 4" />
        <img src={img5portfolio} alt="Portfolio Item 5" />
        <img src={img6portfolio} alt="Portfolio Item 6" />
      </div>

      <div className="graystrip">
        <h5>And many more to come!</h5>
      </div>
    </div>
  );
}
