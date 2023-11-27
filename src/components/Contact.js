import React from 'react'

export default function Contact() {
  return (
    <div>
      <div className="contactbackground">
      <div>
      <h2 className="contact">C O N T A C T</h2>
      </div>
      <div className="contacttext">
      <p>Nulla in velit a metus rhoncus tempus. Nulla congue nulla vel sem varius finibus.<br/> Sed ornare sit amet lorem <br/>sed viverra. In vel urna quis libero viverra facilisis ut ac est.</p>
      </div>
        <div className="inputarea"> 
            <input className="enteryourname" type="text" placeholder="ENTER YOUR NAME*"/> <br/>
            <input className="enteryourmail" type="text" placeholder="ENTER YOUR MAIL*"/><br/>
            <input className="phonenumber" type="text" placeholder="PHONE NUMBER*"/><br/>
            <input className="yourmessage" type="text" placeholder="YOUR MESSAGE*"/> <br/>
            <button className="button">SUBMIT</button>
        </div>
        </div>
    </div>
  )
}
