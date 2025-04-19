import React, { useState, useEffect } from "react";
import "./App.css"; 
// import { Link } from "react-router-dom";
import earth from './images/earth.png';


const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">GLOBON</div>
      <ul className="navlinks">
        <li>Services</li>
        <li>Connect</li>
        <li>Sign-up</li>
        <li>Profile</li>
      </ul>
    </nav>
  );
};

const Start = () => {
  return(
    <div>
      <button className="start">start <>     </>
         <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-bar-right" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M6 8a.5.5 0 0 0 .5.5h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L12.293 7.5H6.5A.5.5 0 0 0 6 8m-2.5 7a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 1 0v13a.5.5 0 0 1-.5.5"/>
         </svg>
      </button>
    </div>
  )
}


const Earth = () => {
  return (
    <div className="homepage" id="Home">

      <div className="lefthome">
        <div className="icon">
        <img src={earth} alt="Globon Logo" />
        </div>       
      </div>
    </div>
  );
};


const TheThought = () => {
    return(
      <div id="about">
          <div className="heading-container">
          <div id="line"></div><h1 id="thought">THE THOUGHT</h1><div id="line"></div>
          </div>
          <br/><br/><br/><br/>
          <h1 id="whatthought">|  What we thought ?</h1> 
          <br/><br/>
          <p className="thoughtpara">This initiative is not merely a matter of individual carbon management <br/> 
            but rather promises alignment of sustainability goals at local, national, and international levels. <br/>
            Institutions are increasingly being asked to demonstrate their commitment toward sustainability, <br/> 
            and so effective carbon tracking becomes a very valuable instrument in such endeavours. <br/><br/>
            With this research, <br/>
            this study is presented with successful case studies and best practices to bring the full potential of the GLOBON in transforming <br/>
            the process of carbon emissions tracking into a powerful driver for positive environmental change.
            <br/>
            </p>
            <br/><br/><br/><br/>
      </div>
    )
  }


const ContactUs = () => {
  const [carbonCount, setCarbonCount] = useState("10211583078"); 

  useEffect(() => {
    const interval = setInterval(() => {
      setCarbonCount((prev) => {
        const newCount = Number(prev.replace(/,/g, "")) + 1;
        return newCount.toLocaleString();
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);


  return (
    <div>
      <div className="heading-container">
        <div id="line2"></div>
        <h1 id="creators"></h1>
        <div id="line2"></div>
      </div>
      <div className="services-container">
        {/* Registration Form */}
        <div className="left-form-box"> 
          <h3>Join Us</h3>
          <label>Name <br /> </label>
          <input type="text" placeholder="Enter your name" />
          <label>Email <br /> </label>
          <input type="email" placeholder="Enter your email" /> <br />
          <label>Date of Birth <br /> </label>
          <input type="date" /> <br/><br/>
          <button>Register</button>
        </div>

        {/* Carbon Counter */}
        <div>
        <h1 className="joinus">JOIN US</h1>
        <p id="joinusid">Help Us !! Be a member of our community <br/>and take an initiative with us to reduce the carbon emmission globally </p>
        <div className="right-carbon-counter">
          <div> 
            <span id="carbon-count">{carbonCount}</span>
          </div>
          <p>Total carbon produced this year in 2025</p>
        </div>
        </div>
      </div>
    </div>
  );
};


const Footer = () => {
  return (
    <footer className="footer">
      <h1>GLOBON</h1>
     
      <div className="footer-nav">
        <div>
          <a href="#">Home</a>
          <a href="#">Profile</a>
          <a href="#">Community</a>
        </div>
      </div>
      <div className="copyright">
        @copyright 2025 reserved by @The Arcadians
      </div>
    </footer>
  );
};


export {Navbar, Start, Earth, TheThought, ContactUs, Footer};