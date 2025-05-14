import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';
import './PhotoEditing.css';

const PhotoEditing = () => {
  const [projects, setProjects] = useState([]);
  const [filter, setFilter] = useState('all');
  const [isLoading, setIsLoading] = useState(true);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);
  
  // Simulated data - in a real app, this would come from an API or CMS
  useEffect(() => {
    // Simulate loading delay
    setTimeout(() => {
      const projectData = [
        {
          id: 'photo1',
          title: 'Product Photography Series',
          category: 'product',
          thumbnail: '/images/projects/product-photo-thumb.jpg',
          description: 'High-end product photography with advanced retouching and composition techniques.',
          tags: ['Product', 'Commercial', 'Retouching']
        },
        {
          id: 'photo2',
          title: 'Portrait Retouching',
          category: 'portrait',
          thumbnail: '/images/projects/portrait-thumb.jpg',
          description: 'Professional portrait editing with skin retouching, color grading, and enhancement.',
          tags: ['Portrait', 'Retouching', 'Beauty']
        },
        {
          id: 'photo3',
          title: 'Landscape Enhancement',
          category: 'landscape',
          thumbnail: '/images/projects/landscape-thumb.jpg',
          description: 'Dramatic landscape enhancements with sky replacement, color manipulation, and compositing.',
          tags: ['Landscape', 'Composite', 'Color Grading']
        },
        {
          id: 'photo4',
          title: 'Food Photography Editing',
          category: 'food',
          thumbnail: '/images/projects/food-photo-thumb.jpg',
          description: 'Mouthwatering food photography with color enhancement and texture refinement.',
          tags: ['Food', 'Commercial', 'Color']
        },
        {
          id: 'photo5',
          title: 'Real Estate Photo Editing',
          category: 'real-estate',
          thumbnail: '/images/projects/real-estate-thumb.jpg',
          description: 'Professional real estate photography with perspective correction, HDR processing, and sky replacement.',
          tags: ['Real Estate', 'HDR', 'Architectural']
        },
        {
          id: 'photo6',
          title: 'Composite Art',
          category: 'composite',
          thumbnail: '/images/projects/composite-thumb.jpg',
          description: 'Creative photo manipulation and compositing to create surreal and fantastical scenes.',
          tags: ['Composite', 'Creative', 'Manipulation']
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
    { id: 'product', name: 'Product' },
    { id: 'portrait', name: 'Portrait' },
    { id: 'landscape', name: 'Landscape' },
    { id: 'food', name: 'Food' },
    { id: 'real-estate', name: 'Real Estate' },
    { id: 'composite', name: 'Composite' }
  ];

  // Function to open lightbox
  const openLightbox = (project) => {
    setCurrentImage(project);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden'; // Prevent scrolling when lightbox is open
  };

  // Function to close lightbox
  const closeLightbox = () => {
    setLightboxOpen(false);
    setCurrentImage(null);
    document.body.style.overflow = 'auto'; // Restore scrolling
  };

  return (
    <motion.div 
      className="photo-editing"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="page-header">
        <h1>Photo Editing</h1>
        <p>Transforming ordinary photographs into extraordinary visual experiences through creative retouching and enhancement.</p>
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
            <div className="photo-project-card" key={project.id}>
              <ProjectCard 
                id={project.id}
                title={project.title}
                thumbnail={project.thumbnail}
                description={project.description}
                tags={project.tags}
                category="photo-editing"
              />
              <button 
                className="before-after-btn"
                onClick={() => openLightbox(project)}
              >
                Before & After
              </button>
            </div>
          ))}
        </div>
      )}
      
      {/* Before & After Lightbox */}
      {lightboxOpen && currentImage && (
        <div className="lightbox">
          <div className="lightbox-content">
            <button className="lightbox-close" onClick={closeLightbox}>×</button>
            <h2>{currentImage.title}</h2>
            <div className="before-after-container">
              <div className="before-image">
                <h3>Before</h3>
                <div className="image-placeholder">
                  {/* In a real implementation, this would be the actual before image */}
                  <div className="placeholder-text">Before Image</div>
                </div>
              </div>
              <div className="after-image">
                <h3>After</h3>
                <div className="image-placeholder">
                  {/* In a real implementation, this would be the actual after image */}
                  <div className="placeholder-text">After Image</div>
                </div>
              </div>
            </div>
            <div className="editing-details">
              <h3>Editing Process</h3>
              <ul>
                <li>Initial color correction and white balance adjustment</li>
                <li>Exposure and contrast refinement</li>
                <li>Selective retouching and enhancement</li>
                <li>Advanced color grading for mood</li>
                <li>Final sharpening and output optimization</li>
              </ul>
            </div>
          </div>
        </div>
      )}
      
      <div className="editing-approach">
        <h2>My Photo Editing Approach</h2>
        <div className="approach-content">
          <div className="approach-text">
            <p>
              My photo editing philosophy centers on enhancing the inherent qualities of each image while maintaining authenticity. 
              I believe in thoughtful, purpose-driven editing that serves the story or message behind the photograph.
            </p>
            <p>
              Each project begins with a thorough assessment of the raw material and a clear vision for the final result. 
              Whether it's subtle retouching for portraiture or dramatic compositing for creative projects, I approach each image 
              with meticulous attention to detail and a commitment to quality.
            </p>
            <p>
              I use non-destructive editing techniques to preserve image integrity and allow for flexible workflows. 
              This approach ensures optimal quality and enables easy revisions when needed.
            </p>
          </div>
          <div className="expertise-areas">
            <div className="expertise-item">
              <h3>Color Grading</h3>
              <p>Creating mood and atmosphere through advanced color manipulation.</p>
            </div>
            <div className="expertise-item">
              <h3>Portrait Retouching</h3>
              <p>Natural skin enhancement that preserves texture and character.</p>
            </div>
            <div className="expertise-item">
              <h3>Composite Creation</h3>
              <p>Seamless combination of multiple images into cohesive scenes.</p>
            </div>
            <div className="expertise-item">
              <h3>Product Enhancement</h3>
              <p>Highlighting product features while maintaining realism.</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="skills-section">
        <h2>Photo Editing Tools & Skills</h2>
        <div className="skills-grid">
          <div className="skill-card">
            <h3>Adobe Photoshop</h3>
            <p>Advanced retouching, compositing, and manipulation</p>
          </div>
          <div className="skill-card">
            <h3>Adobe Lightroom</h3>
            <p>RAW processing, color grading, batch editing</p>
          </div>
          <div className="skill-card">
            <h3>Capture One</h3>
            <p>Professional tethering and color management</p>
          </div>
          <div className="skill-card">
            <h3>Specialized Plugins</h3>
            <p>Nik Collection, Portraiture, Luminar AI</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default PhotoEditing;