import React from 'react';
import './index.css';

const loc =
  'https://maps.google.com/maps?q=500%20Terry%20Francois%20Street%20San%20Francisco,%20CA%2094158&t=&z=13&ie=UTF8&iwloc=&output=embed';

function Contact() {
  return (
    <div className="main-contact">
      <div className="container-grid">
        <div className="contact-text">
          <h2>Contact</h2>
          <p>Zmaja od Bosne bb, 71000 Sarajevo</p>
          <p>someone@etf.com</p>
          <p>123-456-789</p>
        </div>
        <div className="contact-form">
          <form>
            <input type="text" placeholder="Name" required></input>
            <input type="text" placeholder="Email" required></input>
            <br></br>

            <input type="text" placeholder="Phone"></input>
            <input type="text" placeholder="Address" required></input>
            <br></br>
            <input
              type="text"
              placeholder="Subject"
              id="sub-input"
              required
            ></input>
            <br></br>
            <textarea
              type="text"
              placeholder="Type your message here"
              id="msg-input"
              required
            ></textarea>
            <br></br>
            <input type="submit" id="submit-input"></input>
          </form>
        </div>
      </div>

      <div className="mapouter">
        <div>
          <iframe
            title="TasteUp"
            width="100%"
            height="600"
            frameborder="0"
            scrolling="no"
            marginheight="0"
            marginwidth="0"
            src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Zmaja%20od%20Bosne%20+(TasteUp)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          ></iframe>
          <a href="https://www.maps.ie/draw-radius-circle-map/">
         
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
