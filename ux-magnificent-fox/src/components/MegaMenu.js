import React from 'react';
import '../css/Navigation.css';

const MegaMenu = ({ items, imageSrc, description }) => {
  return (
    <div className="dropdown-content" style={{ left: '0' }}>
      <div className="left-column">
        <ul>
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
      <div className="right-column">
        <img src={imageSrc} alt={description} />
        <p>{description}</p>
      </div>
    </div>
  );
};

export default MegaMenu;
