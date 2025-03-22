import React from 'react';
import '../css/VideoCards.css';
import Carousel from './Carousel';

const VideoCards = ({ cards }) => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1024 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 1024, min: 768 },
      items: 2,
    },
    tablet: {
      breakpoint: { max: 768, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="video-cards">
      <Carousel
        responsive={responsive}
        settings={{slidesToShow: 3}}
        arrows={true}
      >
        {(cards || []).map((card, index) => (
          <div key={index} className="video-card">
            <video className="section-video" playsInline autoPlay loop muted preload="metadata">
              <source src={card.video} type="video/mp4" />
            </video>
            <div className="video-titles">
              {card.products.map((product, idx) => (
                <div key={idx} className="video-title">
                  <a href={product.link}>{product.title}</a>
                </div>
              ))}
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default VideoCards;
