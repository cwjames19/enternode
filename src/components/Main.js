import React from 'react';
import BigName from './BigName';
import Carousel from './Carousel';
import '../styles/Main.css';

//images for big-names section
import FrontendBackend from '../assets/svg/frontend-backend.svg';
import Walmart from "../assets/svg/big-names/0.svg";
import Ebay from "../assets/svg/big-names/1.svg";
import Paypal from "../assets/svg/big-names/2.svg";
import DowJones from "../assets/svg/big-names/3.svg";
import Intuit from "../assets/svg/big-names/4.svg";
import Netflix from "../assets/svg/big-names/5.svg";
import LinkedIn from "../assets/svg/big-names/6.svg";
import NewYorkTimes from "../assets/svg/big-names/7.svg";
import Microsoft from "../assets/svg/big-names/8.svg";
import Uber from "../assets/svg/big-names/9.svg";
import Yahoo from "../assets/svg/big-names/10.svg";
import SpaceX from "../assets/svg/big-names/11.svg";
import WalmartWhite from "../assets/svg/big-names/0-white.svg";
import EbayWhite from "../assets/svg/big-names/1-white.svg";
import PaypalWhite from "../assets/svg/big-names/2-white.svg";
import DowJonesWhite from "../assets/svg/big-names/3-white.svg";
import IntuitWhite from "../assets/svg/big-names/4-white.svg";
import NetflixWhite from "../assets/svg/big-names/5-white.svg";
import LinkedInWhite from "../assets/svg/big-names/6-white.svg";
import NewYorkTimesWhite from "../assets/svg/big-names/7-white.svg";
import MicrosoftWhite from "../assets/svg/big-names/8-white.svg";
import UberWhite from "../assets/svg/big-names/9-white.svg";
import YahooWhite from "../assets/svg/big-names/10-white.svg";
import SpaceXWhite from "../assets/svg/big-names/11-white.svg";

//images for ways-we-work section
import Sprint from '../assets/svg/ways-we-work/0.svg';
import Trial from '../assets/svg/ways-we-work/1.svg';
import Pros from '../assets/svg/ways-we-work/2.svg';
import Technical from '../assets/svg/ways-we-work/3.svg';
import Billing from '../assets/svg/ways-we-work/4.svg';
import Contact from '../assets/svg/ways-we-work/5.svg';


const contactInfo ='hello@enternode.com \n +48 535714196 \n Poznańska 11/10b \n 00-680 Warsaw, Poland \n';

class Main extends React.Component {

  render() {
    const bigNames = 
      <div className="big-names-grid">
        {
          [
            [Walmart, WalmartWhite, "Walmart"],
            [Ebay, EbayWhite, "Ebay"],
            [Paypal, PaypalWhite, "Paypal"],
            [DowJones, DowJonesWhite, "DowJones"],
            [Intuit, IntuitWhite, "Intuit"],
            [Netflix, NetflixWhite, "Netflix"],
            [LinkedIn, LinkedInWhite, "LinkedIn"],
            [NewYorkTimes, NewYorkTimesWhite, "NewYorkTimes"],
            [Microsoft, MicrosoftWhite, "Microsoft"],
            [Uber, UberWhite, "Uber"],
            [Yahoo, YahooWhite, "Yahoo"],
            [SpaceX, SpaceXWhite, "SpaceX"]
          ].map( (name, i) => {
            return (
              <BigName
                name={name[2]}
                logo={name[0]}
                white={name[1]}
                id={`big-names-item${i}`}
                key={`big-name-item${i}`}
              />
            );
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
              <div className="ways-we-work--item" key={i}>
                <div>
                  <img src={way[0]} className={`item${i}`} alt={`ways we work ${i}`} />
                  <p className="text" >{way[1]}</p>
                </div>
              </div>
            );
          })
        }
      </div>
    ;

    return(
      <div className="main">
        <section className="about-technology">
          <h2 className="big-header">About technology</h2>
          <p className="text double-column display-linebreak">
                {`A lot of people already know JavaScript, even people who do not claim to be programmers. It is arguable the most popular programming language.

                Web development in a dynamic language (JavaScript) on a VM that is incredibly fast (V8). It is much faster than Ruby Python, or Perl.

                Ability to handle thousands of concurrent connections with minimal overhead on a single process.

                JavaScript is perfect for event loops with first class function objects and closures. People already know how to use it this way having used it in the browser to respond to user initiated events.`}
          </p>
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
          <h2 className="how-we-work--header big-header">How we work</h2>
          <p className="text double-column">
            We are happy to work basing on the specification (project approach), 
            however the way we often work is connecting to the team of other 
            great experts to work together on one product.
          </p>
          {waysWeWork}
        </section>
        <section className="carousel-contact">
          <Carousel />
          <div className="contact-us">
            <div>
              <h2 className="big-header">Contact us</h2>
            </div>
            <div>
              <h2 className="big-header">Contact us</h2>
              <p className="display-linebreak text">{contactInfo}</p>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Main;