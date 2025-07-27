import React from 'react';
import './PublicProfile.css';

const PublicProfile = () => {
  const socialLinks = [
    {
      name: 'LeetCode',
      url: 'https://leetcode.com/u/gowthamprasath14/',
      icon: '🧠',
      color: '#FFA116',
      description: 'Explore my problem-solving skills and algorithmic thinking.'
},
    {
      name: 'GeeksForGeeks',
      url: 'https://www.geeksforgeeks.org/user/gowthamprasathk/',
      icon: '👨‍💻',
      color: '#0F9D58',
      description: 'Solved various DSA problems to strengthen programming concepts.'
    },
    {
      name: 'GitHub',
      url: 'https://github.com/gowthamprasath14',
      icon: '🐙',
      color: '#333',
      description: 'Check out my code repositories and open source contributions'
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/gowtham-prasath-k',
      icon: '💼',
      color: '#0077B5',
      description: 'Connect with me professionally and see my career journey'
    },
    
    {
      name: 'Portfolio',
      url: 'https://gowtham',
      icon: '🌐',
      color: '#F97316',
      description: 'Visit my detailed portfolio website'
    },
    {
      name: 'Medium',
      url: 'https://medium.com/@kgowthamprasath',
      icon: '✍️',
      color: '#00AB6C',
      description: 'Read my technical articles and tutorials'
    }
  ];

  return (
    <section id="profile" className="profile-section">
      <div className="container">
        <h2>Public Profile</h2>
        <p className="section-subtitle">
          Connect with me across different platforms and stay updated with my latest work.
        </p>
        
        <div className="profile-content">        
          <div className="social-links">
            {socialLinks.map((social, index) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-card"
                style={{ 
                  animationDelay: `${index * 0.1}s`,
                  '--accent-color': social.color 
                }}
              >
                <div className="social-icon">{social.icon}</div>
                <div className="social-content">
                  <h3>{social.name}</h3>
                  <p>{social.description}</p>
                </div>
                <div className="social-arrow">→</div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PublicProfile;