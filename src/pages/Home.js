import React from 'react';
import { Link } from 'react-router-dom';
import ProjectCard from '../components/ProjectCard';
import './Home.css';

const Home = () => {
  const featuredProjects = [
    {
      id: 'graphic1',
      title: 'Brand Identity: Coastal Cafe',
      category: 'Graphic Design',
      thumbnail: '/images/projects/graphic1.jpg',
      route: '/graphic-design'
    },
    {
      id: 'video1',
      title: 'Commercial: Active Sportswear',
      category: 'Video Editing',
      thumbnail: '/images/projects/video1.jpg',
      route: '/video-editing'
    },
    {
      id: 'photo1',
      title: 'Product Photography: Luxury Watch',
      category: 'Photo Editing',
      thumbnail: '/images/projects/photo1.jpg',
      route: '/photo-editing'
    }
  ];

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="fade-in">Bringing Ideas to Life</h1>
          <p className="fade-in">Graphic Design | Video Editing | Photo Editing</p>
          <div className="hero-buttons fade-in">
            <Link to="/contact" className="btn">Get in Touch</Link>
            <Link to="/about" className="btn btn-outline">About Me</Link>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="featured-projects">
        <div className="container">
          <h2 className="section-title">Featured Work</h2>
          <div className="projects-grid">
            {featuredProjects.map(project => (
              <ProjectCard 
                key={project.id}
                project={project}
              />
            ))}
          </div>
          <div className="view-all-container">
            <Link to="/graphic-design" className="btn">View All Projects</Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services">
        <div className="container">
          <h2 className="section-title">Services</h2>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon graphic-icon"></div>
              <h3>Graphic Design</h3>
              <p>Brand identity, print materials, digital assets, and marketing collateral.</p>
              <Link to="/graphic-design" className="service-link">View Projects</Link>
            </div>
            <div className="service-card">
              <div className="service-icon video-icon"></div>
              <h3>Video Editing</h3>
              <p>Commercial editing, motion graphics, color grading, and post-production.</p>
              <Link to="/video-editing" className="service-link">View Projects</Link>
            </div>
            <div className="service-card">
              <div className="service-icon photo-icon"></div>
              <h3>Photo Editing</h3>
              <p>Retouching, color correction, compositing, and enhancement.</p>
              <Link to="/photo-editing" className="service-link">View Projects</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta">
        <div className="container">
          <h2>Let's Create Something Amazing Together</h2>
          <p>Ready to elevate your visual content? I'm here to help.</p>
          <Link to="/contact" className="btn">Contact Me</Link>
        </div>
      </section>
    </div>
  );
};

export default Home;