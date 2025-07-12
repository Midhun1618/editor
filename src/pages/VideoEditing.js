import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';
import event_car from './images/projects/car_event_thumbnail.png'
import car from './images/projects/kia_thumbnail.jpg'
import dance from './images/projects/dance_thumbnail.jpg'
import mountain from './images/projects/mountain_thumbnail.jpg'
import './VideoEditing.css';

const VideoEditing = () => {
  const [projects, setProjects] = useState([]);
  const [filter, setFilter] = useState('all');
  const [isLoading, setIsLoading] = useState(true);
  
  // Simulated data - in a real app, this would come from an API or CMS
  useEffect(() => {
    // Simulate loading delay
    setTimeout(() => {
      const projectData = [
        {
          id: 'vid1',
          title: 'Cinematic Travel B-roll',
          category: 'promotional',
          thumbnail: mountain,
          description: 'A 60-second promotional video showcasing brand values and products with dynamic editing and motion graphics.',
          tags: ['Promotion', 'Motion Graphics', 'After Effects']
        },
        {
          id: 'vid2',
          title: 'Stylish Cars Showcase',
          category: 'commercial',
          thumbnail: car,
          description: 'Teaser video for new product launch with suspenseful editing and reveal sequence.',
          tags: ['Commercial', 'Product', 'Premiere Pro']
        },
        {
          id: 'vid3',
          title: 'Dance Cover Perfomance',
          category: 'perfomance',
          thumbnail: dance,
          description: 'Energetic dance cover shot with multiple angles and synced to the beat with dynamic transitions.',
          tags: ['Dance', 'Perfomance', 'Beat Sync']
        },
        {
          id: 'vid4',
          title: 'Event Highlight Reel',
          category: 'social',
          thumbnail: event_car,
          description: 'Vertical video formatted for Instagram with fast-paced b-roll editing.',
          tags: ['Social Media', 'Short-Form', 'Vertical']
        },
        {
          id: 'vid5',
          title: 'Cinematic Short Film',
          category: 'narrative',
          thumbnail: '/images/projects/short-film-thumb.jpg',
          description: 'A narrative short film with color grading and sound design to create emotional impact.',
          tags: ['Narrative', 'Color Grading', 'DaVinci Resolve']
        },
        {
          id: 'vid6',
          title: 'Motion Graphics Explainer',
          category: 'animation',
          thumbnail: '/images/projects/motion-graphics-thumb.jpg',
          description: 'Animated explainer video using motion graphics to communicate complex concepts.',
          tags: ['Animation', 'Motion Graphics', 'Explainer']
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
    { id: 'promotional', name: 'Promotional' },
    { id: 'commercial', name: 'Commercial' },
    { id: 'event', name: 'Event' },
    { id: 'social', name: 'Social Media' },
    { id: 'narrative', name: 'Narrative' },
    { id: 'animation', name: 'Animation' }
  ];

  const handleVideoPreview = (id) => {
    console.log(`Opening video preview for project ${id}`);
  };

  return (
    <motion.div 
      className="video-editing"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="page-header">
        <h1>Video Editing</h1>
        <p>Creating compelling visual stories through dynamic editing, motion graphics, and color grading.</p>
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
            <div className="video-project-card" key={project.id}>
              <ProjectCard 
                id={project.id}
                title={project.title}
                thumbnail={project.thumbnail}
                description={project.description}
                tags={project.tags}
                category="video-editing"
              />
              <button 
                className="video-preview-btn"
                onClick={() => handleVideoPreview(project.id)}
              >
                <i className="fas fa-play"></i> Preview
              </button>
            </div>
          ))}
        </div>
      )}
      
      <div className="video-process-section">
        <h2>My Video Editing Process</h2>
        <div className="process-steps">
          <div className="process-step">
            <div className="step-number">01</div>
            <h3>Concept Development</h3>
            <p>Understanding the goals, audience, and message to develop a clear concept and storyboard.</p>
          </div>
          <div className="process-step">
            <div className="step-number">02</div>
            <h3>Raw Footage Review</h3>
            <p>Organizing and reviewing all footage to select the best shots and identify key moments.</p>
          </div>
          <div className="process-step">
            <div className="step-number">03</div>
            <h3>Rough Cut</h3>
            <p>Creating the initial structure and flow of the video with basic sequencing and timing.</p>
          </div>
          <div className="process-step">
            <div className="step-number">04</div>
            <h3>Fine Editing</h3>
            <p>Refining transitions, pacing, and flow to create a cohesive and engaging narrative.</p>
          </div>
          <div className="process-step">
            <div className="step-number">05</div>
            <h3>Color Grading</h3>
            <p>Enhancing visual mood and consistency through professional color grading techniques.</p>
          </div>
          <div className="process-step">
            <div className="step-number">06</div>
            <h3>Audio & Sound Design</h3>
            <p>Mixing audio, adding sound effects, and ensuring professional sound quality.</p>
          </div>
          <div className="process-step">
            <div className="step-number">07</div>
            <h3>Motion Graphics</h3>
            <p>Creating custom animations, titles, and visual effects to enhance the message.</p>
          </div>
          <div className="process-step">
            <div className="step-number">08</div>
            <h3>Final Delivery</h3>
            <p>Exporting in optimal formats for various platforms and finalizing deliverables.</p>
          </div>
        </div>
      </div>
      
      <div className="skills-section">
        <h2>Video Editing Tools & Skills</h2>
        <div className="skills-grid">
          <div className="skill-card">
            <h3>Editing Software</h3>
            <p>Adobe Premiere Pro, Final Cut Pro, DaVinci Resolve</p>
          </div>
          <div className="skill-card">
            <h3>Motion Graphics</h3>
            <p>Adobe After Effects, Cinema 4D, Element 3D</p>
          </div>
          <div className="skill-card">
            <h3>Color Grading</h3>
            <p>DaVinci Resolve, LUTs, Color Theory</p>
          </div>
          <div className="skill-card">
            <h3>Audio Editing</h3>
            <p>Adobe Audition, Pro Tools, Sound Design</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default VideoEditing;