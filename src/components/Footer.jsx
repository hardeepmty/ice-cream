import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3 style={{marginTop:"15px", paddingTop:"15px"}}>ABOUT US</h3>
          <p>With a commitment to quality and customer satisfaction, Chill Delights brings joy to dessert lovers across the city.</p>
        </div>
        <div className="footer-section">
          <h3>QUICK LINKS</h3>
          <ul>
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#contact">Contact</a>
          </ul>
        </div>
        
      </div>
      <p className="footer-bottom">&copy; 2024 CHILL DELIGHTS. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
