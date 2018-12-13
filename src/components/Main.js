import React from 'react';
import Carousel from './Carousel';
import '../styles/Main.css';

//images for big-names section
import FrontendBackend from '../assets/png/frontend-backend.png';
import Walmart from "../assets/png/big-names/1.png";
import Ebay from "../assets/png/big-names/2.png";
import Paypal from "../assets/png/big-names/3.png";
import DowJones from "../assets/png/big-names/4.png";
import Intuit from "../assets/png/big-names/5.png";
import Netflix from "../assets/png/big-names/6.png";
import LinkedIn from "../assets/png/big-names/7.png";
import NewYorkTimes from "../assets/png/big-names/8.png";
import Microsoft from "../assets/png/big-names/9.png";
import Uber from "../assets/png/big-names/10.png";
import Yahoo from "../assets/png/big-names/11.png";
import SpaceX from "../assets/png/big-names/12.png";

//images for ways-we-work section
import Sprint from '../assets/png/ways-we-work/1.png';
import Trial from '../assets/png/ways-we-work/2.png';
import Pros from '../assets/png/ways-we-work/3.png';
import Technical from '../assets/png/ways-we-work/4.png';
import Billing from '../assets/png/ways-we-work/5.png';
import Contact from '../assets/png/ways-we-work/6.png';


const contactInfo ='hello@enternode.com \n +48 535714196 \n Poznańska 11/10b \n 00-680 Warsaw, Poland';

const bigNames = 
  <div className="big-names-grid">
    {
      [Walmart, Ebay, Paypal, DowJones, Intuit, Netflix, LinkedIn, NewYorkTimes, Microsoft, Uber, Yahoo, SpaceX].map( (logo, i) => {
        return(
          <div className={`big-names-item item${i}`}>
            <img src={logo} alt={`big name ${i}`} key={i} />
          </div>
        )
      })
    }
  </div>
;
const waysWeWork = 
  <div className="ways-we-work--container">
    {
      [
        [Sprint, "Weekly based sprints"],
        [Trial, "Trial period"],
        [Pros, "Only senior professionals"],
        [Technical, "Technical person in charge"],
        [Billing, "Billing done monthly or weekly"],
        [Contact, "Direct contact with developers"]
      ].map( (way, i) => {
        return(
          <div className="ways-we-work--item">
            <div>
              <img src={way[0]} className={`item${i}`} alt={`ways we work ${i}`} key={i} />
              <p className="text" >{way[1]}</p>
            </div>
          </div>
        );
      })
    }
  </div>
;

const Main = () => {
  return(
    <div className="main">
      <section className="about-technology">
        <h2 className="big-header">About technology</h2>
        <div>
          <div>
            <p className="text" id="about-technology-item1">
              A lot of people already know JavaScript, even people who 
              do not claim to be programmers. It is arguable the most popular 
              programming language.
            </p>
            <p className="text" id="about-technology-item2">
              Web development in a dynamic language (JavaScript) on a VM that 
              is incredibly fast (V8). It is much faster thatn Ruby Python, or Perl.
            </p>
          </div>
          <div>
            <p className="text" id="about-technology-item3">
              Ability to handle thousands of concurrent connections with minimal 
              overhead on a single process.
            </p>
            <p className="text" id="about-technology-item4">
              JavaScript is perfect for event loops with first class function 
              objects and closures. People already know how to use it this way 
              having used it in the browser to respond to user initiated events.
            </p>
          </div>
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
        {bigNames}
      </section>
      <section className="how-we-work">
        <h2 className="how-we-work--header big-header">How We Work</h2>
        <p className="text">
          We are happy to work basing on the specification (project approach), 
          however the way we often work is connecting to the team of other 
          great experts to work together on one product.
        </p>
        {waysWeWork}
      </section>
      <Carousel />
      <section className="contact-us">
        <div>
          <h2 className="big-header">Contact us</h2>
        </div>
        <div>
          <p className="display-linebreak text">{contactInfo}</p>
        </div>
      </section>
    </div>
  );
}

export default Main;
