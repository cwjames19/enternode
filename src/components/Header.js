import React from 'react';
import MainNavigation from './MainNavigation';
import '../styles/Header.css';

const Header = () => {
  return(
    <div className="header">
      <div className="header--container">
        <MainNavigation />
        <div className="header--hero">
          <div className="hero--text">
          <h1>Node.js for Enterprise</h1>
            <p>
              We are a team of experience, certified Node.js experts, 
              delivering highly scalable & efficient technology service 
              for enterprise sector.
            </p>
          </div>
          <div className="hero--dots--container">
            <div className="center">
              <div className="blue"></div>
            </div>
            <div className="space-around">
              <div className="blue"></div>
              <div className="citrus"></div>
            </div>
            <div className="space-between">
              <div className="blue"></div>
              <div className="citrus"></div>
              <div className="grey"></div>
            </div>
            <div className="space-around">
              <div className="citrus"></div>
              <div className="grey"></div>
            </div>
            <div className="space-between">
              <div className="blue"></div>
              <div className="grey"></div>
              <div className="grey"></div>
            </div>
            <div className="space-around">
              <div className="citrus"></div>
              <div className="grey"></div>
            </div>
            <div className="space-between">
              <div className="blue"></div>
              <div className="grey"></div>
              <div className="grey"></div>
            </div>
            <div className="space-around">
              <div className="citrus"></div>
              <div className="grey"></div>
            </div>
            <div className="center">
              <div className="grey"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
