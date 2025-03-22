import React from 'react';
import Carousel from './Carousel';
import '../css/OffersBanner.css';

const OffersBanner = ({ theme }) => {
  const promoTexts = [
    "GET FLAT 10% OFF ON YOUR FIRST ORDER | USE CODE: FIRST10",
    "5% OFF ON ALL PREPAID ORDERS | OFFER APPLIED AT PAYMENT PAGE"
  ];

  return (
    <div className="offers-banner" style={theme}>
      <Carousel
        settings={{
          arrows: false,
          nextArrow: <div className="arrow next">❯</div>,
          prevArrow: <div className="arrow prev">❮</div>,
        }}
      >
        {promoTexts?.map((promoText) => (
          <span key={promoText}>{promoText}</span>
        ))}
      </Carousel>
    </div>
  );
};

export default OffersBanner;
