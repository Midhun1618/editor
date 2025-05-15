import React from 'react';
import { Link } from 'react-router-dom';
import './ProjectCard.css';

const ProjectCard = ({ title, thumbnail, id, category, route }) => {
  return (
    <div className="project-card">
      <div className="project-thumbnail">
        <img src={thumbnail} alt={title} />
        <div className="project-overlay">
          <Link to={`/project/${id}`} className="view-project-btn">
            View Project
          </Link>
        </div>
      </div>
      <div className="project-info">
        <span className="project-category">{category}</span>
        <h3 className="project-title">{title}</h3>
        <Link to={route} className="project-link">
          See more like this <span className="arrow">→</span>
        </Link>
      </div>
    </div>
  );
};


export default ProjectCard;