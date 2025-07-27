import React, { useEffect, useState } from 'react';
import './Navbar.css';
import profileImage from '../../assets/profile.jpeg';
import resume from '../../assets/resume.pdf';

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 100);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`navbar ${isVisible ? 'navbar-visible' : ''}`}>
      <div className="navbar-container">
        <div className="navbar-brand">
          <img src={profileImage} alt="Profile" className="profile-image" />
          <span className="brand-name">GOWTHAM PRASATH K</span>
        </div>
        <ul className="navbar-menu">
          <li><a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>Home</a></li>
          <li><a href="#projects" onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }}>Projects</a></li>
          <li><a href="#certifications" onClick={(e) => { e.preventDefault(); scrollToSection('certifications'); }}>Certifications</a></li>
          <li><a href="#profile" onClick={(e) => { e.preventDefault(); scrollToSection('profile'); }}>Public Profile</a></li>
          <li><a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>Contact</a></li>
          <li>
            <a
              href={resume}
              target="_blank"
              rel="noopener noreferrer">
              Resume
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
