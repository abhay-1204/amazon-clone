import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__section">
        <div class="back" >
           Back to top
        </div>
          <h4 className="footer__sectionTitle">Get to Know Us</h4>
          <ul className="footer__sectionList">
            <li>About Us</li>
            <li>Careers</li>
            <li>Press Releases</li>
            {/* Add more links as needed */}
          </ul>
        </div>
        <div className="footer__section">
          <h4 className="footer__sectionTitle">Make Money with Us</h4>
          <ul className="footer__sectionList">
            <li>Sell on Amazon</li>
            <li>Sell Under Amazon Accelerator</li>
            {/* Add more links as needed */}
          </ul>
        </div>
        <div className="footer__section">
          <h4 className="footer__sectionTitle">Make Money with Us</h4>
          <ul className="footer__sectionList">
            <li>Sell on Amazon</li>
            <li>Sell Under Amazon Accelerator</li>
            {/* Add more links as needed */}
          </ul>
        </div>
        <div className="footer__section">
          <h4 className="footer__sectionTitle">Make Money with Us</h4>
          <ul className="footer__sectionList">
            <li>Sell on Amazon</li>
            <li>Sell Under Amazon Accelerator</li>
            {/* Add more links as needed */}
          </ul>
        </div>
        {/* Add more sections as needed */}
      </div>
    </footer>
  );
};

export default Footer;
