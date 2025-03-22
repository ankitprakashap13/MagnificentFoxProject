import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../css/Carousel.css';

const Carousel = ({ children, settings: customSettings }) => {
  const defaultSettings = {
    arrows: true,
    autoplay: true,
    autoplaySpeed: 5000,
    centerMode: true,
    cssEase: 'ease-in-out',
    draggable: true,
    pauseOnHover: true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    centerPadding: '0px',
  };

  const settings = { ...defaultSettings, ...customSettings };

  return (
    <Slider {...settings}>
      {children}
    </Slider>
  );
};

export default Carousel;
