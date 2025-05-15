import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-logo">
            <h3>Midhun KP</h3>
            <p>Design & Video Production</p>
          </div>
          
          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/graphic-design">Graphic Design</Link></li>
              <li><Link to="/video-editing">Video Editing</Link></li>
              <li><Link to="/photo-editing">Photo Editing</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          
          <div className="footer-contact">
            <h4>Contact</h4>
            <p>
              <i className="icon-email"></i>
              <a href="mailto:midhumidhun342@gmail.com">midhumidhun342@gmail.com</a>
            </p>
            <div className="social-links">
              <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <i className="icon-instagram"></i>
              </a>
              <a href="https://behance.net/" target="_blank" rel="noopener noreferrer" aria-label="Behance">
                <i className="icon-behance"></i>
              </a>
              <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <i className="icon-linkedin"></i>
              </a>
              <a href="https://vimeo.com/" target="_blank" rel="noopener noreferrer" aria-label="Vimeo">
                <i className="icon-vimeo"></i>
              </a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {currentYear} Midhun KP. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;