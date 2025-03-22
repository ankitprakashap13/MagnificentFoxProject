import React from 'react';
import PropTypes from 'prop-types';
import Carousel from './Carousel';

const SlideShow = ({ products }) => {
    return (
        <Carousel settings={{
            dots: true,
            arrows: false,
            variableWidth: true
        }}>
            {(products || []).map(product => (
                <div key={product.id} className="slide">
                    <h3>{product.name}</h3>
                    <p>{product.description}</p>
                </div>
            ))}
        </Carousel>
    );
};

SlideShow.propTypes = {
    products: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default SlideShow;
