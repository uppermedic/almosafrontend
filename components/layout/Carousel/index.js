import React, { Component } from 'react';
import Slider from 'react-slick';
import CarouselContent from 'src/components/Home/CarouselContent';

class ReactSlickDemo extends Component {
  render() {
    var settings = {
      dots: true,
      responsive: [
        {
          breakpoint: 600,
          settings: {
            autoplay: true,
            speed: 1000
          }
        }
      ]
    };

    const { data } = this.props;
    return (
      <div className="carousel">
        <Slider {...settings}>
          {data.map((slide, idx) => (
            <div key={idx}>
              <img
                className="carousel-image"
                src={slide.image}
                alt="carousel-image"
              />
              <div className="overlay">
                <CarouselContent data={slide} index={idx} />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    );
  }
}

export default ReactSlickDemo;
