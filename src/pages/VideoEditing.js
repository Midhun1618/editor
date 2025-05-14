import React, { useState } from 'react';
import ProjectCard from '../components/ProjectCard';
import VideoPlayer from '../components/VideoPlayer';
import './PortfolioPage.css';
import './VideoEditing.css';

const VideoEditing = () => {
  // Filter categories for video projects
  const [activeFilter, setActiveFilter] = useState('all');
  const [featuredVideo, setFeaturedVideo] = useState({
    id: 'video1',
    title: 'Commercial: Active Sportswear',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Replace with your actual video URL
    description: 'A dynamic commercial for a sportswear brand featuring high-energy transitions and color grading.'
  });
  
  // Sample video projects - replace with your actual projects
  const videoProjects = [
    {
      id: 'video1',
      title: 'Commercial: Active Sportswear',
      category: 'Commercial',
      thumbnail: '/images/projects/video1.jpg',
      route: '/video-editing',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Replace with your actual video URL
      description: 'A dynamic commercial for a sportswear brand featuring high-energy transitions and color grading.'
    },
    {
      id: 'video2',
      title: 'Short Film: Urban Stories',
      category: 'Film',
      thumbnail: '/images/projects/video2.jpg',
      route: '/video-editing',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Replace with your actual video URL
      description: 'A narrative short film exploring city life with cinematic editing techniques.'
    },
    {
      id: 'video3',
      title: 'Corporate Video: Tech Startup',
      category: 'Corporate',
      thumbnail: '/images/projects/video3.jpg',
      route: '/video-editing',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Replace with your actual video URL
      description: 'Company overview video with clean transitions and professional tone.'
    },
    {
      id: 'video4',
      title: 'Music Video: Electronic Artist',
      category: 'Music',
      thumbnail: '/images/projects/video4.jpg',
      route: '/video-editing',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Replace with your actual video URL
      description: 'Visually striking music video with effects synchronized to the beat.'
    },
    {
      id: 'video5',
      title: 'Event Recap: Industry Conference',
      category: 'Event',
      thumbnail: '/images/projects/video5.jpg',
      route: '/video-editing',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Replace with your actual video URL
      description: 'Highlight reel showcasing key moments from a major industry event.'
    },
    {
      id: 'video6',
      title: 'Product Launch: Smart Device',
      category: 'Commercial',
      thumbnail: '/images/projects/video6.jpg',
      route: '/video-editing',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Replace with your actual video URL
      description: 'Product launch video with detailed feature demonstrations and motion graphics.'
    }
  ];

  // Get unique categories for filter buttons
  const categories = ['all', ...new Set(videoProjects.map(project => project.category.toLowerCase()))];

  // Filter projects based on active filter
  const filteredProjects = activeFilter === 'all' 
    ? videoProjects 
    : videoProjects.filter(project => project.category.toLowerCase() === activeFilter);

  // Handle clicking on a project to set it as featured
  const handleProjectClick = (project) => {
    setFeaturedVideo({
      id: project.id,
      title: project.title,
      videoUrl: project.videoUrl,
      description: project.description
    });
    
    // Scroll to video player
    document.getElementById('featured-video-section').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="portfolio-page">
      <div className="page-header">
        <div className="container">
          <h1>Video Editing Portfolio</h1>
          <p>Visual storytelling through motion, color, and rhythm.</p>
        </div>
      </div>

      {/* Featured Video Section */}
      <section id="featured-video-section" className="featured-video-section">
        <div className="container">
          <h2 className="section-title">Featured Video</h2>
          <div className="featured-video-container">
            <VideoPlayer 
              videoUrl={featuredVideo.videoUrl} 
              title={featuredVideo.title}
            />
            <div className="video-info">
              <h3>{featuredVideo.title}</h3>
              <p>{featuredVideo.description}</p>
            </div>
          </div>
        </div>
      </section>

      <div className="container">
        {/* Portfolio Filters */}
        <div className="portfolio-filters">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`filter-btn ${activeFilter === category ? 'active' : ''}`}
              onClick={() => setActiveFilter(category)}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="portfolio-grid">
          {filteredProjects.map(project => (
            <div key={project.id} onClick={() => handleProjectClick(project)}>
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>

      {/* Services Section */}
      <section className="services-offered">
        <div className="container">
          <h2 className="section-title">Video Editing Services</h2>
          <div className="services-list">
            <div className="service-item">
              <h3>Commercial Editing</h3>
              <p>Promotional videos, advertisements, and product showcases with precise timing and engaging rhythm.</p>
            </div>
            <div className="service-item">
              <h3>Motion Graphics</h3>
              <p>Animated text, logos, and visual elements that enhance your video content and brand messaging.</p>
            </div>
            <div className="service-item">
              <h3>Color Grading</h3>
              <p>Professional color correction and stylistic grading to achieve the perfect mood and visual consistency.</p>
            </div>
            <div className="service-item">
              <h3>Post-Production</h3>
              <p>Sound design, visual effects, transitions, and final optimizations for various platforms.</p>
            </div>
          </div>
          
        </div>
      </section>
    </div>
  );
};

export default VideoEditing;