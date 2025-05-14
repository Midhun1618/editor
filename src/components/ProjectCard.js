import React from 'react';
import { Link } from 'react-router-dom';
import './ProjectCard.css';

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      <div className="project-thumbnail">
        <img src={project.thumbnail} alt={project.title} />
        <div className="project-overlay">
          <Link 
            to={`/project/${project.id}`} 
            className="view-project-btn"
          >
            View Project
          </Link>
        </div>
      </div>
      <div className="project-info">
        <span className="project-category">{project.category}</span>
        <h3 className="project-title">{project.title}</h3>
        <Link to={project.route} className="project-link">
          See more like this
          <span className="arrow">→</span>
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;