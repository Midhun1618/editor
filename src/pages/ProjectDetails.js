// src/pages/ProjectDetails.js

import React from 'react';
import './ProjectDetails.css';
import { useParams } from 'react-router-dom';

const projectData = {
  '1': {
    title: 'Logo Design for BrandX',
    description: 'Crafted a modern logo using minimalistic principles for BrandX.',
    image: 'https://via.placeholder.com/800x400?text=Logo+Design',
    tools: ['Illustrator', 'Photoshop'],
  },
  '2': {
    title: 'Product Promo Video',
    description: 'A fast-paced product video for a new gadget launch.',
    image: 'https://via.placeholder.com/800x400?text=Video+Editing',
    tools: ['Premiere Pro', 'After Effects'],
  },
  // Add more mock projects as needed
};

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projectData[id];

  if (!project) {
    return <div className="project-details container"><h2>Project not found 😢</h2></div>;
  }

  return (
    <div className="project-details container">
      <h1>{project.title}</h1>
      <img src={project.image} alt={project.title} className="project-image" />
      <p className="project-description">{project.description}</p>
      <h3>Tools Used:</h3>
      <ul className="tools-list">
        {project.tools.map((tool, index) => (
          <li key={index}>{tool}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectDetails;
