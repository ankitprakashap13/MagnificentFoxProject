import React from 'react';
import './HorizontalList.css';

const HorizontalList = ({ items }) => {
  return (
    <div className="horizontal-list">
      {items.map((item, index) => (
        <div key={index} className="horizontal-list-item">
          {item.type === 'image' && <img src={item.src} alt={item.alt} />}
          {item.type === 'video' && <video src={item.src} controls />}
          {item.text && <p>{item.text}</p>}
          {item.buttonText && <button onClick={item.onButtonClick}>{item.buttonText}</button>}
        </div>
      ))}
    </div>
  );
};

export default HorizontalList;
