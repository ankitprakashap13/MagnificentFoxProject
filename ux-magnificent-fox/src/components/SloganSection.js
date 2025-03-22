import React from 'react';
import '../css/SloganSection.css';

const SloganSection = ({ slogan }) => {
  return (
    <div className="slogan-section">
      <h2 className="center-text">{slogan}</h2>
    </div>
  );
};

export default SloganSection;
