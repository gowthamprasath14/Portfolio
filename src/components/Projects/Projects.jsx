import React from 'react';
import './Projects.css';
import cloud_bg from './project_bg/cloud_bg.png';
import Inventory_Management from './project_bg/Inventory_Management.png';
import movie_search from './project_bg/movie_search.png';
const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Cloud-Based Secure File Storing System",
      description: "A secure platform that allows users to upload, encrypt, and store files in the cloud while ensuring privacy, easy access, and reliable availability.",
      image: cloud_bg,
      technologies: ["React", "Fast Api", "PostgreSQL", "AWS"],
      githubUrl: "https://github.com/Anokxz/Zero-Trust-Storage"
    },
    {
      id: 2,
      title: "Inventory Management and Invoice Generation",
      description: "A fast and efficient web-based stock management and invoicing system built using Flask, FastAPI, and MySQL, enabling real-time inventory tracking and billing operations",
      image: Inventory_Management,
      technologies: ["React", "FAST Api", "MySQL"],
      githubUrl: "https://github.com/Anokxz/Inventory-Management"
    },
    {
      id: 3,
      title: "Movie Website",
      description: "A dynamic movie search website built with React.js that fetches data from a movie API and enables real-time searching and filtering of movie results.",
      image: movie_search,
      technologies: ["React"],
      githubUrl: "https://github.com/gowthamprasath14/Movie-website"
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2>My Projects</h2>
        <p className="section-subtitle">
          Here are some of my projects that showcase my skills and passion for development.
        </p>
        
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div 
              key={project.id} 
              className="project-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <div className="project-links">
                    <a 
                      href={project.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="btn btn-secondary"
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                
                <div className="project-technologies">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;