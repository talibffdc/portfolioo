import React from 'react';
import imgcontactseparator from "./images/separatorBlack 1.png";

export default function Contact() {
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

        <div className="inputarea">
          <input className="enteryourname" type="text" placeholder="ENTER YOUR NAME*" required /> <br />
          <input className="enteryourmail" type="text" placeholder="ENTER YOUR MAIL*" /><br />
          <input className="phonenumber" type="text" placeholder="PHONE NUMBER*" /><br />
          <input className="yourmessage" type="text" placeholder="YOUR MESSAGE*" /> <br />
          <button className="button">SUBMIT</button>
        </div>
      </div>
    </div>
  );
}
