import React from 'react';
import PropTypes from 'prop-types';
import Carousel from './Carousel';
import ProductCard from '../atoms/card/ProductCard';

const Favourites = ({ products }) => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 8,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 4,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  };

  return (
    <Carousel responsive={responsive} settings={{slidesToShow: 8}}>
      {(products || []).filter(product => product.quantity > 0).map(product => (
        <ProductCard key={product.id} card={product} />
      ))}
    </Carousel>
  );
};

Favourites.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Favourites;
