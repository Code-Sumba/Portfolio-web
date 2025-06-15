import React from 'react';
import '../styles/Footer.css';

// This is my Footer component
function Footer() {
  // Get the current year for the copyright
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          {/* Social media links */}
          <div className="social-links">
            <a href="https://github.com/Code-Sumba" target="_blank" rel="noopener noreferrer" className="social-link">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/abhishekashoksupekar/" target="_blank" rel="noopener noreferrer" className="social-link">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-link">
              <i className="fab fa-twitter"></i>
            </a>
          </div>
          
          {/* Copyright text */}
          <p className="copyright">
            &copy; {currentYear} ABHI.
          </p>
          
          {/* Made with love text */}
          <p className="made-with">
            Made with <span className="heart">❤️</span> using React
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
