import React from 'react';
import PropTypes from 'prop-types';

const Reviews = ({ reviews }) => {
    return (
        <div className="reviews">
            {reviews.map((review, index) => (
                <div key={index} className="review-item">
                    <p>{review}</p>
                </div>
            ))}
        </div>
    );
};

Reviews.propTypes = {
    reviews: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Reviews;