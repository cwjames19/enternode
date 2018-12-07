import React from 'react';
import FrontendBackend from '../assets/png/frontend-backend.png';
import Walmart from "../assets/png/big-names/walmart.png";
import Ebay from "../assets/png/big-names/ebay.png";
import Paypal from "../assets/png/big-names/paypal.png";
import DowJones from "../assets/png/big-names/dowjones.png";
import Intuit from "../assets/png/big-names/intuit.png";
import Netflix from "../assets/png/big-names/netflix.png";
import LinkedIn from "../assets/png/big-names/linkedin.png";
import NewYorkTimes from "../assets/png/big-names/newyorktimes.png";
import Microsoft from "../assets/png/big-names/microsoft.png";
import Uber from "../assets/png/big-names/uber.png";
import Yahoo from "../assets/png/big-names/yahoo.png";
import SpaceX from "../assets/png/big-names/spacex.png";
import Carousel from './Carousel';
import '../styles/Main.css';

const contactInfo ='hello@enternode.com \n +48 535714196 \n Poznańska 11/10b \n 00-680 Warsaw, Poland';

const BigNames = 
  <div className="big-names-grid">
    <img src={Walmart} alt={`Node company`} />
    <img src={Ebay} alt={`Node company`} />
    <img src={Paypal} alt={`Node company`} />
    <img src={DowJones} alt={`Node company`} />
    <img src={Intuit} alt={`Node company`} />
    <img src={Netflix} alt={`Node company`} />
    <img src={LinkedIn} alt={`Node company`} />
    <img src={NewYorkTimes} alt={`Node company`} />
    <img src={Microsoft} alt={`Node company`} />
    <img src={Uber} alt={`Node company`} />
    <img src={Yahoo} alt={`Node company`} />
    <img src={SpaceX} alt={`Node company`} />
  </div>
;

const Main = () => {
  return(
    <div className="main">
      <section className="about-technology">
        <h2>About technology</h2>
        <div>
          <p id="about-technology-item1">
            A lot of people already know JavaScript, even people who 
            do not claim to be programmers. It is arguable the most popular 
            programming language.
          </p>
          <p id="about-technology-item2">
            Web development in a dynamic language (JavaScript) on a VM that 
            is incredibly fast (V8). It is much faster thatn Ruby Python, or Perl.
          </p>
          <p id="about-technology-item3">
            Ability to handle thousands of concurrent connections with minimal 
            overhead on a single process.
          </p>
          <p id="about-technology-item4">
            JavaScript is perfect for event loops with first class function 
            objects and closures. People already know how to use it this way 
            having used it in the browser to respond to user initiated events.
          </p>
        </div>
        <div>
          <img src={FrontendBackend} alt="frontend backend connection"></img>
        </div>
      </section>
      <section className="big-names">
        <div className="dots-container"></div>
        <h3 className="big-names--header">
          Big names already using Node.js
        </h3>
        {BigNames}
      </section>
      <section className="how-we-work">
      </section>
      <Carousel />
      <section className="contact-us">
        <div>
          <h2>Contact us</h2>
        </div>
        <div>
          <p className="display-linebreak">{contactInfo}</p>
        </div>
      </section>
    </div>
  );
}

export default Main;
