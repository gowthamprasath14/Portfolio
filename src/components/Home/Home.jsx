import React from 'react';
import './Home.css';
import profileImage from '../../assets/standing-pic.jpg';

const Home = () => {
  return (
    <section id="home" className="home-section">
      <div className="container">
        <div className="home-content">
          <div className="home-text">
            <h1 className="home-title">
              <span className="highlight">Hi, I'm  GOWTHAM PRASATH K</span>
            </h1>
            <p className="home-description">
            Final year B.Tech Information Technology student at Bannari Amman Institute of Technology, hailing from Udumalpet. Proficient in Java and Data Structures & Algorithms (DSA), with a strong passion for cloud computing and web technologies. A dedicated problem-solver aiming to apply technical expertise in developing innovative cloud-based solutions, while continuously learning and evolving within the IT domain.
            </p>
            <div className="home-actions">
              <a href="#projects" className="btn btn-primary">View My Work</a>
              <a href="#contact" className="btn btn-secondary">Get In Touch</a>
            </div>
          </div>
          <div className="home-image">
            <div className="image-container">
              <img 
                src={profileImage}
                className="hero-image"
              />
              <div className="image-overlay"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;