import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';
import './GraphicDesign.css';

const GraphicDesign = () => {
  const [projects, setProjects] = useState([]);
  const [filter, setFilter] = useState('all');
  const [isLoading, setIsLoading] = useState(true);
  
  // Simulated data - in a real app, this would come from an API or CMS
  useEffect(() => {
    // Simulate loading delay
    setTimeout(() => {
      const projectData = [
        {
          id: 'gd1',
          title: 'Brand Identity System',
          category: 'branding',
          thumbnail: '/images/projects/brand-identity-thumb.jpg',
          description: 'Complete brand identity system including logo, color palette, typography, and usage guidelines.',
          tags: ['Branding', 'Logo Design', 'Style Guide']
        },
        {
          id: 'gd2',
          title: 'Marketing Campaign Visuals',
          category: 'marketing',
          thumbnail: '/images/projects/marketing-campaign-thumb.jpg',
          description: 'Series of digital and print assets for a seasonal marketing campaign.',
          tags: ['Marketing', 'Social Media', 'Print']
        },
        {
          id: 'gd3',
          title: 'UI Design System',
          category: 'ui',
          thumbnail: '/images/projects/ui-design-thumb.jpg',
          description: 'Comprehensive UI component library and design system for web applications.',
          tags: ['UI/UX', 'Design System', 'Web']
        },
        {
          id: 'gd4',
          title: 'Packaging Design',
          category: 'packaging',
          thumbnail: '/images/projects/packaging-thumb.jpg',
          description: 'Product packaging design for a premium food product line.',
          tags: ['Packaging', 'Print', '3D Mockup']
        },
        {
          id: 'gd5',
          title: 'Editorial Layout',
          category: 'print',
          thumbnail: '/images/projects/editorial-thumb.jpg',
          description: 'Magazine layout and editorial design for a feature article.',
          tags: ['Editorial', 'Print', 'Typography']
        },
        {
          id: 'gd6',
          title: 'Infographic Design',
          category: 'infographic',
          thumbnail: '/images/projects/infographic-thumb.jpg',
          description: 'Data visualization and infographic design for complex information.',
          tags: ['Infographic', 'Data Viz', 'Information Design']
        }
      ];
      
      setProjects(projectData);
      setIsLoading(false);
    }, 800);
  }, []);
  
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);
    
  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'branding', name: 'Branding' },
    { id: 'marketing', name: 'Marketing' },
    { id: 'ui', name: 'UI Design' },
    { id: 'packaging', name: 'Packaging' },
    { id: 'print', name: 'Print' },
    { id: 'infographic', name: 'Infographics' }
  ];

  return (
    <motion.div 
      className="graphic-design"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="page-header">
        <h1>Graphic Design</h1>
        <p>Exploring visual communication through thoughtful design systems, branding, and creative solutions.</p>
      </div>
      
      <div className="filter-container">
        {categories.map(category => (
          <button 
            key={category.id}
            className={`filter-btn ${filter === category.id ? 'active' : ''}`}
            onClick={() => setFilter(category.id)}
          >
            {category.name}
          </button>
        ))}
      </div>
      
      {isLoading ? (
        <div className="loading-container">
          <div className="loader"></div>
          <p>Loading projects...</p>
        </div>
      ) : (
        <div className="projects-grid">
          {filteredProjects.map(project => (
            <ProjectCard 
              key={project.id}
              id={project.id}
              title={project.title}
              thumbnail={project.thumbnail}
              description={project.description}
              tags={project.tags}
              category="graphic-design"
            />
          ))}
        </div>
      )}
      
      <div className="skills-section">
        <h2>Design Skills & Tools</h2>
        <div className="skills-grid">
          <div className="skill-card">
            <h3>Adobe Creative Suite</h3>
            <p>Photoshop, Illustrator, InDesign, XD</p>
          </div>
          <div className="skill-card">
            <h3>Digital Design</h3>
            <p>UI/UX, Social Media, Web Graphics</p>
          </div>
          <div className="skill-card">
            <h3>Print Design</h3>
            <p>Editorial, Packaging, Marketing Materials</p>
          </div>
          <div className="skill-card">
            <h3>Visual Identity</h3>
            <p>Logo Design, Brand Guidelines, Style Guides</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default GraphicDesign;