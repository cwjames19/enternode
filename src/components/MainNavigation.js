import React from 'react';
import Dropdown from './Dropdown';
import Logo from '../assets/png/logo.png';
import '../styles/MainNavigation.css';

const MainNavigation = () => {
  return(
    <div className="main-nav">
      <div>
        <div className="logo-container">
          <img src={Logo} alt="enternode logo"></img>
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
        <div className="nav-options-mobile">
          <Dropdown />
        </div>
      </div>
      <hr />
      <div className="message-us text">
        message us at hello@enternode.com
      </div>
    </div>
  );
}

export default MainNavigation;