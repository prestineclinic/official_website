import React, { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom'; // Assuming you're using React Router
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faClock, faMapMarkerAlt, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
// import './Navbar.css'; // Make sure this path is correct
import Navimg from '../Images/company-removebg-preview.png'

const Navbar = () => {
  const [isFixed, setIsFixed] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const bottomBarRef = useRef(null);
  const navLinksRef = useRef(null); // Ref for the mobile nav links dropdown

  // Effect for sticky navbar
  useEffect(() => {
    const handleScroll = () => {
      if (bottomBarRef.current) {
        // Get the top offset of the bottom bar *relative to the document*
        const offset = bottomBarRef.current.offsetTop;
        // Check if the scroll position has passed the original top of the bottom bar
        setIsFixed(window.scrollY > offset);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Effect to dynamically set the mobile menu's top position
  useEffect(() => {
    const setMenuTopPosition = () => {
      if (isMenuOpen && bottomBarRef.current && navLinksRef.current) {
        let topPosition = 0;

        // If the bottom bar is currently fixed, its 'top' is 0, and we just need its height
        if (isFixed) {
          topPosition = bottomBarRef.current.offsetHeight;
        } else {
          // If not fixed, calculate its position relative to the viewport
          // getBoundingClientRect() gives size and position relative to the viewport
          const rect = bottomBarRef.current.getBoundingClientRect();
          topPosition = rect.bottom; // The bottom edge of the navbar relative to the viewport
        }
        
        navLinksRef.current.style.top = `${topPosition}px`;
      }
    };

    // Call it initially when menu opens, or when fixed state changes
    setMenuTopPosition();

    // Also call on window resize, or scroll in case layout shifts
    // Debounce these if performance becomes an issue on very rapid events
    window.addEventListener('resize', setMenuTopPosition);
    window.addEventListener('scroll', setMenuTopPosition); // Important for non-sticky state

    return () => {
      window.removeEventListener('resize', setMenuTopPosition);
      window.removeEventListener('scroll', setMenuTopPosition);
    };
  }, [isMenuOpen, isFixed]); // Re-run when menu opens/closes or fixed state changes

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Function to close menu when a link is clicked (optional, but good UX)
  const handleNavLinkClick = () => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="navbar-container">
      {/* Top Bar */}
      <div className="navbar-top-bar">
        <div className="top-bar-content">
          <div className="navbar-logo">
            <img src={Navimg} alt="OSTEOPREHAB Logo" />
            {/* Or if you use text logo:
            <h2>OSTEOPREHAB</h2>
            <p>Treating more than just pain</p>
            */}
          </div>
          <div className="top-bar-info">
            <div className="info-item">
                <FontAwesomeIcon style={{color:"#c0392b"}} icon={faPhone} />
                <a style={{ textDecoration: "none", color: "#555555" }} href="tel:+491234567890">+91 6364 635 943</a>
              <a href="mailto:prestine.clinic@gmail.com" className="email-link">prestine.clinic@gmail.com</a>
            </div>
            <div className="info-item">
              <FontAwesomeIcon style={{color:"#c0392b"}} icon={faClock} /> {/* Corrected icon for clock */}
              <span>Mon to Sat</span>
              <span>5 PM to 9 PM</span>
              <span>Sun (9 AM to 1 PM)</span>
            </div>
            <div className="info-item address-block">
              <FontAwesomeIcon style={{color:"#c0392b"}} icon={faMapMarkerAlt} />
              <span>No 50 hig, KHB Colony, Koramangala </span>
              <span>8th Block, Koramangala,</span>
              <span> Bengaluru, Karnataka 560095</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Sticky Bar */}
      <div
        ref={bottomBarRef}
        className={`navbar-bottom-bar ${isFixed ? 'fixed-navbar' : ''}`}
      >
        <div className="bottom-bar-content">
          {/* Mobile Menu Toggle */}
          <button className="menu-toggle" onClick={toggleMenu} aria-label="Toggle navigation">
            <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
          </button>

          {/* Navigation Links */}
          <ul ref={navLinksRef} className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
            <li><NavLink to="/" onClick={handleNavLinkClick}>Home</NavLink></li>
            <li><NavLink to="/about" onClick={handleNavLinkClick}>About</NavLink></li>
            <li><NavLink to="/contact" onClick={handleNavLinkClick}>Contact</NavLink></li>
          </ul>

          {/* Get Directions Button - outside nav-links to keep it separate */}
          <div className="navbar-actions">
          <a
          className="get-directions-btn"
            href="https://maps.app.goo.gl/X6yLj491oM27uxEz6"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button style={{
              backgroundColor: 'transparent',
              outline: 'none',
              border: 'none',
              cursor: 'pointer',
              fontSize: '1rem',
              color: 'white',
            }}>Get Directions</button>
          </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;