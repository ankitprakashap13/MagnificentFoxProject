import React from 'react';
import '../css/Navigation.css';
import { Icon } from 'atomize';
import MegaMenu from './MegaMenu';

const Navigation = ({ theme }) => {
  return (
    <nav className="navigation" style={{ background: theme.background, color: theme.color }}>
      <div className="navigation-section logo">
        <a href="/" className="logo-text">Magnificent Fox</a>
      </div>
      <ul className="nav-links">
        <li>Home</li>
        <li className="dropdown">
          Men
          <MegaMenu 
            items={[
              "SLEEPWEAR",
              "SHORTS",
              "PAJAMAS",
              "SHORT SETS",
              "PAJAMA SETS",
              "LUCY SETS",
              "T-SHIRTS",
              "KNITWEAR",
              "WINTER ESSENTIALS"
            ]} 
            imageSrc="image1.jpg" 
            description="Item 1 Description" 
          />
        </li>
        <li className="dropdown">
          Women
          <MegaMenu 
            items={['Item 1', 'Item 2', 'Item 3']} 
            imageSrc="image2.jpg" 
            description="Item 2 Description" 
          />
        </li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <ul className="user-actions">
        <li><Icon name="Search" size="20px" color={theme.color} className="icon" /></li>
        <li><Icon name="User" size="20px" color={theme.color} className="icon" /></li>
        <li><Icon name="Bag" size="20px" color={theme.color} className="icon" /></li>
      </ul>
    </nav>
  );
};

export default Navigation;
