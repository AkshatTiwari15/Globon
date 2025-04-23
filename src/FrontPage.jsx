import React, { useState, useEffect } from "react";
import "./App";
import "./App.css"; 
import { Link } from "react-router-dom";
import earth from './images/earth.png';


const Navbar = () => {
  const Location = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        alert(`Latitude: ${latitude}, Longitude: ${longitude}`);
      }, (error) => {
        alert("Unable to retrieve your location. Please allow location access.");
      });
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  };

  return (
    <nav className="navbar">
      <div className="logo">GLOBON</div>
      <ul className="navlinks">
        <li>
          <Link to="/Services">Services</Link>
        </li>
        <li onClick={Location} style={{ cursor: 'pointer' }}>
          Location
        </li>
        <li>
          <Link to="/Login">Log-In</Link>
        </li>
        <li>
          <Link to="/Button">button</Link>
        </li>
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
      {/* <div className="heading-container">
        <div id="line2"></div><h1 id="creators"></h1><div id="line2"></div>
      </div> */}
      <div className="services-container">
        {/* Registration Form */}
        <div className="left-form-box"> 
          <h3>Join Us</h3>
          <label>Name <br /> </label>
          <input type="text" placeholder="Enter your name" />
          <label>Email <br /> </label>
          <input type="email" placeholder="Enter your email" /> <br />
          {/* <label>Contact <br /> </label>
          <input type="tel" placeholder="Enter your phone no" /> <br /> */}
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
  const rocketgames = () => {
    window.open('https://www.rocketgames.io/', '_blank');
  };
  return (
    <footer className="footer">
      <h1>GLOBON</h1>
      <div className="footer-nav">
        <div onClick={rocketgames} style={{ cursor: 'pointer' }}>
           <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="currentColor" class="bi bi-rocket-takeoff" viewBox="0 0 16 16">
              <path d="M9.752 6.193c.599.6 1.73.437 2.528-.362s.96-1.932.362-2.531c-.599-.6-1.73-.438-2.528.361-.798.8-.96 1.933-.362 2.532"/>
              <path d="M15.811 3.312c-.363 1.534-1.334 3.626-3.64 6.218l-.24 2.408a2.56 2.56 0 0 1-.732 1.526L8.817 15.85a.51.51 0 0 1-.867-.434l.27-1.899c.04-.28-.013-.593-.131-.956a9 9 0 0 0-.249-.657l-.082-.202c-.815-.197-1.578-.662-2.191-1.277-.614-.615-1.079-1.379-1.275-2.195l-.203-.083a10 10 0 0 0-.655-.248c-.363-.119-.675-.172-.955-.132l-1.896.27A.51.51 0 0 1 .15 7.17l2.382-2.386c.41-.41.947-.67 1.524-.734h.006l2.4-.238C9.005 1.55 11.087.582 12.623.208c.89-.217 1.59-.232 2.08-.188.244.023.435.06.57.093q.1.026.16.045c.184.06.279.13.351.295l.029.073a3.5 3.5 0 0 1 .157.721c.055.485.051 1.178-.159 2.065m-4.828 7.475.04-.04-.107 1.081a1.54 1.54 0 0 1-.44.913l-1.298 1.3.054-.38c.072-.506-.034-.993-.172-1.418a9 9 0 0 0-.164-.45c.738-.065 1.462-.38 2.087-1.006M5.205 5c-.625.626-.94 1.351-1.004 2.09a9 9 0 0 0-.45-.164c-.424-.138-.91-.244-1.416-.172l-.38.054 1.3-1.3c.245-.246.566-.401.91-.44l1.08-.107zm9.406-3.961c-.38-.034-.967-.027-1.746.163-1.558.38-3.917 1.496-6.937 4.521-.62.62-.799 1.34-.687 2.051.107.676.483 1.362 1.048 1.928.564.565 1.25.941 1.924 1.049.71.112 1.429-.067 2.048-.688 3.079-3.083 4.192-5.444 4.556-6.987.183-.771.18-1.345.138-1.713a3 3 0 0 0-.045-.283 3 3 0 0 0-.3-.041Z"/>
              <path d="M7.009 12.139a7.6 7.6 0 0 1-1.804-1.352A7.6 7.6 0 0 1 3.794 8.86c-1.102.992-1.965 5.054-1.839 5.18.125.126 3.936-.896 5.054-1.902Z"/>
           </svg>
        </div>
      </div>
      <div className="copyright">
        @copyright 2025 reserved by @The Arcadians
      </div>
    </footer>
  );
};


export {Navbar, Start, Earth, TheThought, ContactUs, Footer};