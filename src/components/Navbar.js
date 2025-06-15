import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/Navbar.css';

// This is my Navbar component
function Navbar() {
  // This is a state variable to track if mobile menu is open
  const [menuOpen, setMenuOpen] = React.useState(false);
  const location = useLocation();
  
  // Close menu when route changes
  useEffect(() => {
    setMenuOpen(false);
  }, [location]);
  
  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuOpen && !event.target.closest('.navbar-container')) {
        setMenuOpen(false);
      }
    };
    
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [menuOpen]);
  
  // This function toggles the mobile menu
  function toggleMenu(e) {
    e.stopPropagation();
    setMenuOpen(!menuOpen);
  }
  
  // Prevent scrolling when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [menuOpen]);
  
  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* This is my logo/name */}
        <Link to="/" className="navbar-logo">
          ABHI
        </Link>
        
        {/* This is the hamburger menu button for mobile */}
        <div className="menu-icon" onClick={toggleMenu}>
          <i className={menuOpen ? 'fas fa-times' : 'fas fa-bars'}></i>
        </div>
        
        {/* These are my navigation links */}
        <ul className={menuOpen ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-item">
            <Link to="/" className={location.pathname === '/' ? 'nav-link active' : 'nav-link'} onClick={() => setMenuOpen(false)}>
              <i className="fas fa-home nav-icon"></i>
              <span>Home</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className={location.pathname === '/about' ? 'nav-link active' : 'nav-link'} onClick={() => setMenuOpen(false)}>
              <i className="fas fa-user nav-icon"></i>
              <span>About</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/skills" className={location.pathname === '/skills' ? 'nav-link active' : 'nav-link'} onClick={() => setMenuOpen(false)}>
              <i className="fas fa-cogs nav-icon"></i>
              <span>Skills</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/experience" className={location.pathname === '/experience' ? 'nav-link active' : 'nav-link'} onClick={() => setMenuOpen(false)}>
              <i className="fas fa-briefcase nav-icon"></i>
              <span>Experience</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/education" className={location.pathname === '/education' ? 'nav-link active' : 'nav-link'} onClick={() => setMenuOpen(false)}>
              <i className="fas fa-graduation-cap nav-icon"></i>
              <span>Education</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className={location.pathname === '/contact' ? 'nav-link active' : 'nav-link'} onClick={() => setMenuOpen(false)}>
              <i className="fas fa-envelope nav-icon"></i>
              <span>Contact Me</span>
            </Link>
          </li>
        </ul>
      </div>
      
      {/* Overlay for mobile menu */}
      {menuOpen && <div className="menu-overlay" onClick={() => setMenuOpen(false)}></div>}
    </nav>
  );
}

export default Navbar;