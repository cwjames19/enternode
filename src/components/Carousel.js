import React from 'react';
import {Carousel} from 'react-bootstrap';
import '../styles/Carousel.css';

import ArrowLeft from '../assets/png/carousel/arrow-left.png';
import ArrowRight from '../assets/png/carousel/arrow-right.png';
import sampleImage1 from '../assets/png/carousel/carousel-image1.png';
import sampleImage2 from '../assets/png/carousel/carousel-image2.png';
import sampleImage3 from '../assets/png/carousel/carousel-image3.png';
import sampleImage4 from '../assets/png/carousel/carousel-image4.png';

const prevIcon = 
  <div>
    <img className="carousel-arrow arrow-desktop" src={ArrowLeft} alt="previous" />
    <i className="fas fa-arrow-left arrow-mobile"></i>
  </div>;
const nextIcon =
<div>
  <img className="carousel-arrow arrow-desktop" src={ArrowRight} alt="next" />
  <i className="fas fa-arrow-right arrow-mobile" ></i>
</div>;

const carouselItems = [sampleImage1, sampleImage2, sampleImage3, sampleImage4].map( (img, i) => {
  return(
    <Carousel.Item key={i}>
      <img className="carousel--img" src={img} alt={`sample enternode work ${i}`} />
      <Carousel.Caption className="carousel--caption--container">
        <h3 className="carousel--caption big-header">{i + 1}</h3>
      </Carousel.Caption>
    </Carousel.Item>
  );
});

class EnterNodeCarousel extends React.Component {
  constructor(props, context) {
    super(props);

    this.state = {
      index: 0,
      direction: null
    }

    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect(selectedIndex, e) {
    this.setState({
      index: selectedIndex,
      direction: e.direction
    });
  }

  render() {
    const {index, direction} = this.state;

    return(
      <Carousel
        prevIcon={prevIcon}
        nextIcon={nextIcon}
        activeIndex={index}
        direction={direction}
        onSelect={this.handleSelect}
        indicators={false}
      >
        {carouselItems}
      </Carousel>
    );
  }
}

export default EnterNodeCarousel;
