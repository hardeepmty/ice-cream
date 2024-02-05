import React from "react";
import "./Navbar.css";

function Navbar() {
  
  return (
    <header id="nav-wrapper">
      <nav id="nav">
        <div className="nav left">
          <span className="gradient skew">
            <h1 className="logo un-skew">
              <a style={{color:"white",fontFamily:"Montserrat", fontWeight:"bold"}}  href="#home">CHILL DELIGHTS</a>
            </h1>
          </span>
          
          <button id="menu" className="btn-nav">
            <span className="fas fa-bars"></span>
          </button>
        </div>
        <div className="nav right">
          <a href="#home" className="nav-link active">
            <span className="nav-link-span">
              <span className="u-nav" style={{fontFamily:"Montserrat"}}>Home</span>
            </span>
          </a>
          <a href="#about" className="nav-link">
            <span className="nav-link-span">
              <span className="u-nav" style={{fontFamily:"Montserrat"}}>Account</span>
            </span>
          </a>
          <a href="#work" className="nav-link">
            <span className="nav-link-span">
              <span className="u-nav" style={{fontFamily:"Montserrat"}}>Wishlist</span>
            </span>
          </a>
          <a href="#contact" className="nav-link">
            <span className="nav-link-span">
              <span className="u-nav" style={{fontFamily:"Montserrat"}}>Cart</span>
            </span>
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Navbar; // Export the Navbar component
