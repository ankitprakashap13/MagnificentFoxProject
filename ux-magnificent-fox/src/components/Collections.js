import React from 'react';
import PropTypes from 'prop-types';
import '../css/CardList.css';

const Collections = ({ products }) => {
    return (
        <div className="collections">
            {(products || []).map(product => (
                <div key={product.id} className="collection-item">
                    <h3>{product.name}</h3>
                    <p>{product.price}</p>
                </div>
            ))}
        </div>
    );
};

Collections.propTypes = {
    products: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Collections;
