import React from 'react';
import '../css/Footer.css';

const Footer = ({ theme }) => {
  return (
    <div id="footer-wrapper" style={{ background: theme.background }}>
      <div id="footer">
        <div className="footer-block-container">
          {/* OUR BRAND */}
          <div className="footer-column">
            <h3>OUR BRAND</h3>
            <div className="footer-block-content">
              <ul>
                <li><a href="/pages/our-story" title="Our Story">Our Story</a></li>
                <li><a href="/pages/our-team" title="Our Team">Our Team</a></li>
                <li><a href="/pages/faq" title="FAQs">FAQs</a></li>
              </ul>
            </div>
          </div>

          {/* SUPPORT */}
          <div className="footer-column">
            <h3>SUPPORT</h3>
            <div className="footer-block-content">
              <ul>
                <li><a href="/pages/contact-us" title="Contact Us">Contact Us</a></li>
                <li><a href="/pages/size-chart" title="Size Guide">Size Guide</a></li>
                <li><a href="/pages/shipping-returns" title="Returns & Exchange">Returns & Exchange</a></li>
                <li><a href="/pages/returns-exchange" title="Shipping">Shipping</a></li>
                <li><a href="/pages/privacy-policy" title="Privacy Policy">Privacy Policy</a></li>
                <li><a href="/pages/terms-of-service" title="Terms of Service">Terms of Service</a></li>
                <li><a href="/pages/refund-policy" title="Refund policy">Refund policy</a></li>
              </ul>
            </div>
          </div>

          {/* CONNECT WITH US */}
          <div className="footer-column">
            <h3>CONNECT WITH US</h3>
            <div className="footer-block-content">
              <p>Address</p>
            </div>
          </div>
        </div>
      </div>

      <div id="bottom-footer">
        <div className="footer-left">
          <ul className="social-icons__wrapper">
            <li><a href="/" target="_blank" aria-label="Facebook">Facebook</a></li>
            <li><a href="/" target="_blank" aria-label="Instagram">Instagram</a></li>
          </ul>
          <p>
            <a href="/">© 2025 Company Name</a> • <a target="_blank" rel="nofollow" href="/">Powered by Platform</a>
          </p>
        </div>
        <div id="payment" className="footer-right">
          <div className="payment-methods"></div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
