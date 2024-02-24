import React from "react";
import "./footer.scss";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-column">
        <p>CATEGORIES</p>
        <ul>
          <a>Web Builder</a>
          <a>Hosting</a>
          <a>Data Center</a>
          <a>Robotic Automation</a>
        </ul>
      </div>
      <div className="footer-column">
        <p>CONTACT</p>
        <ul>
          <a>Contact</a>
          <a>Privacy Policy</a>
          <a>Terms Of Service</a>
          <a>Categories</a>
          <a>About</a>
        </ul>
      </div>
      <div className="footer-column center">
        <select name="" id="">
          <option value="">
            United States
          </option>
          <option value="">
            India
          </option>
        </select>
      </div>
    </footer>
  );
}

export default Footer;
