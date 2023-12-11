// import React from 'react';
// import imgcontactseparator from "./images/separatorBlack 1.png";

// export default function Contact() {
//   return (
//     <div>
//       <div className="contactbackground">
//         <div className="contactborder">
//           <h2 className="contact">C O N T A C T</h2>
//         </div>

//         <div className="contacttext">
//           <p>
//             Nulla in velit a metus rhoncus tempus. Nulla congue nulla vel sem
//             varius finibus. Sed ornare sit amet lorem sed viverra. In vel urna
//             quis libero viverra facilisis ut ac est.
//           </p>
//           <img src={imgcontactseparator} alt="Separator" />
//         </div>

//         <div className="inputarea">
//           <input className="enteryourname" type="text" placeholder="ENTER YOUR NAME*" required /> <br />
//           <input className="enteryourmail" type="text" placeholder="ENTER YOUR MAIL*" /><br />
//           <input className="phonenumber" type="text" placeholder="PHONE NUMBER*" /><br />
//           <input className="yourmessage" type="text" placeholder="YOUR MESSAGE*" /> <br />
//           <button className="button">SUBMIT</button>
//         </div>
//       </div>
//     </div>
//   );
// }




import React, { useState } from 'react';
import imgcontactseparator from "./images/separatorBlack 1.png";

export default function Contact() {
 
  const [name, setName]=useState('')
  const [email, setEmail]=useState('')
  const [phone, setPhone]=useState('')
  const [message, setMessage]=useState('')

 
  const handleSubmit = (e) => {
    e.preventDefault();


    if (name === '' || email === '' || phone === '' || message === '') {
    } else {
      // Perform your form submission logic here
      alert(`${name}, Form Submitted Successfully`)
    
      setName('')
    }
  };

  return (
    <div>
      <div className="contactbackground">
        <div className="contactborder">
          <h2 className="contact">C O N T A C T</h2>
        </div>

        <div className="contacttext">
          <p>
            Nulla in velit a metus rhoncus tempus. Nulla congue nulla vel sem
            varius finibus. Sed ornare sit amet lorem sed viverra. In vel urna
            quis libero viverra facilisis ut ac est.
          </p>
          <img src={imgcontactseparator} alt="Separator" />
        </div>

        <form className="inputarea" onSubmit={handleSubmit}>
          <input
            className="enteryourname"
            type="text"
            placeholder="ENTER YOUR NAME*"
            required
            name="name"
            value={name}
            onChange={(e)=>setName(e.target.value)}
          />
          <br /> 
          <input
            className="enteryourmail"
            type="email"
            placeholder="ENTER YOUR MAIL*"
            name="email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}

            required
          />
          <br />
          <input
            className="phonenumber"
            type="text"
            placeholder="PHONE NUMBER*"
            name="phone"
            maxLength='10'
            value={phone}
            onChange={(e)=>setPhone(e.target.value)}

          />
          <br />
          <input
            className="yourmessage"
            type="text"
            placeholder="YOUR MESSAGE*"
            name="message"
            value={message}
            onChange={(e)=>setMessage(e.target.value)}

          />
          <br />
          <button className="button" type="submit">SUBMIT</button>
        </form>
      </div>
    </div>
  );
}

