import React from 'react';
import Logo from '../assets/png/logo.png';
import '../styles/MainNavigation.css';

const MainNavigation = () => {
  return(
    <div className="main-nav">
      <div>
        <div className="logo-container">
          <img src={Logo}></img>
          <p className="logo-text">ENTERNODE</p>
        </div>
        <div className="nav-options-container">
          <button>
            <div>
              <p>01</p>
              <p>ABOUT US</p>
            </div>
          </button>
          <button>
            <div>
              <p>0X</p>
              <p>MENU</p>
            </div>
          </button>
        </div>
      </div>
      <hr />
      <div className="message-us">
        message us at hello@enternode.com
      </div>
    </div>
  );
}

export default MainNavigation;