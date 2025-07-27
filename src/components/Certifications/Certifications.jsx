import React, { useState } from 'react';
import './Certifications.css';
import cloud_ppt from './certifications/cloud-ppt.jpg';
import infosys_1 from './certifications/infosys-springboard-1.jpg';
import infosys_2 from './certifications/infosys-springboard-2.jpg';
import maze_rover from './certifications/maze-rover.png';
import monkey_heist from './certifications/monkey-heist.jpg';
import publication from './certifications/publication.jpg';
import network_security from './certifications/saveetha-ppt.jpg';
import linux from './certifications/linux.jpg';

const Certifications = () => {
  const [selectedCert, setSelectedCert] = useState(null);
  
    const certifications = [
      {
        id: 1,
        title: "Publication",
        issuer: "IRJEdT",
        date: "2024",
        image: publication,
        description:
          'Published a research paper titled "Inventory Management and Invoice Generation" in the International Research Journal of Education and Technology (IRJEdT), Volume 06, Issue 12, December 2024 (Pages 223–225). This work was recognized and published under ISSN: 2581-7795, and is indexed in platforms such as Google Scholar, ROAD, and IIJIF.',
      },
      {
        id: 2,
        title: "Paper-Presentation",
        issuer: "SRM Tiruchirappalli",
        date: "2025",
        image: cloud_ppt,
        description:
          'Presented a research paper on "Cloud Based Secure File Storing System". Received a certificate of participation at the 4th National Conference on Recent Advances in Communicative Electronics (NCRACE 2025), organized by the Department of ECE, SRM TRP Engineering College, Tiruchirappalli. Held on April 10–11, 2025.',
      },
      {
        id: 3,
        title: "Paper-Presentation",
        issuer: "SIMATS Chennai",
        date: "2023",
        image: network_security,
        description:
          'Presented a research paper titled "Network Security" at the International Conference on Current Trends in Modernized Computing and Communication Technologies (MCCT 2023), held on October 11, 2023. Organized by the Department of AR/VR, Institute of Computer Science and Engineering, SIMATS Engineering, Chennai.',
      },
      {
        id: 4,
        title: "Basics of Linux",
        issuer: "Great Learning Academy",
        date: "2024",
        image: linux,
        description:
          "Completed a comprehensive online course on Linux fundamentals in February 2024. Covered Linux architecture, terminal commands, file system structure, user management, and basic shell scripting.",
      },
      {
        id: 5,
        title: "Python – Part I",
        issuer: "Infosys SpringBoard",
        date: "2022",
        image: infosys_1,
        description:
          'Completed "Programming Fundamentals using Python – Part 1" on December 28, 2022. Covered variables, data types, control structures, functions, and basic problem-solving.',
      },
      {
        id: 6,
        title: "Python – Part II",
        issuer: "Infosys SpringBoard",
        date: "2023",
        image: infosys_2,
        description:
          'Completed "Programming Fundamentals using Python – Part 2" on February 21, 2023. Focused on intermediate Python topics like functions and error handling.',
      },
      {
        id: 7,
        title: "Maze Rover",
        issuer: "Vashisht'23",
        date: "2023",
        image: maze_rover,
        description:
          "Participated in the Maze Rover event during Vashisht'23 at IIITDM Kancheepuram and received a certificate of participation.",
      },
      {
        id: 8,
        title: "Monkey Heist",
        issuer: "Vashisht'23",
        date: "2023",
        image: monkey_heist,
        description:
          "Participated in the Monkey Heist event during Vashisht'23 at IIITDM Kancheepuram and received a certificate of participation.",
      }
    ];
    

  const openModal = (cert) => {
    setSelectedCert(cert);
  };

  const closeModal = () => {
    setSelectedCert(null);
  };

  return (
    <section id="certifications" className="certifications-section">
      <div className="container">
        <h2>Certifications & Events</h2>
        <p className="section-subtitle">
        A showcase of certifications and events I’ve participated in, reflecting my eagerness to learn, grow, and stay engaged with the tech community.        </p>
        
        <div className="certifications-grid">
          {certifications.map((cert, index) => (
            <div
              key={cert.id}
              className="cert-card"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => openModal(cert)}
            >
              <div className="cert-image">
                <img src={cert.image} alt={cert.title} />
                <div className="cert-overlay">
                  <span className="view-text">Click to View</span>
                </div>
              </div>
              <div className="cert-content">
                <h3>{cert.title}</h3>
                <p className="cert-issuer">{cert.issuer}</p>
                <p className="cert-date">{cert.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedCert && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>×</button>
            <div className="modal-body">
              <div className="modal-image">
                <img src={selectedCert.image} alt={selectedCert.title} />
              </div>
              <div className="modal-info">
                <h3>{selectedCert.title}</h3>
                <p className="modal-issuer">{selectedCert.issuer} • {selectedCert.date}</p>
                <p className="modal-description">{selectedCert.description}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Certifications;