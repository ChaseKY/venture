import React from 'react';
import Logo from '../assets/VENTURElogo.png';

function Contact() {
  return (
    <div>
      <div id="logoContainer">
        <img className="ventureLogo" src={Logo} />
      </div>
      <div id="iconContainer">
        <a className="icon" href="https://github.com/ChaseKY">
          <img className="github" src="https://cdn-icons-png.flaticon.com/512/25/25231.png" />
        </a>
        <a className="icon" href="https://www.linkedin.com/in/chase-young-a3a27722a/">
          <img
            className="linkedin"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/LinkedIn_icon_circle.svg/2048px-LinkedIn_icon_circle.svg.png"
          />
        </a>
      </div>
    </div>
  );
}

export default Contact;
