import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <div className="about-header">
        <h1>About Me</h1>
        <div className="about-underline"></div>
      </div>
      
      <div className="about-content">
        <div className="about-image-container">
          <div className="about-image">
            {/* Replace with your actual image */}
            <img src="/api/placeholder/500/500" alt="Profile" />
          </div>
        </div>
        
        <div className="about-text">
          <h2>Who I Am</h2>
          <p>
            I'm a passionate graphic designer and video editor with over 5 years of experience
            creating compelling visual content across various media platforms. My work combines
            technical precision with creative vision to tell stories that resonate with audiences.
          </p>
          
          <h2>My Approach</h2>
          <p>
            I believe in a collaborative approach to design, working closely with clients to
            understand their vision and bring it to life. Every project begins with thorough
            research and planning, ensuring that the final product not only looks stunning but
            also effectively communicates the intended message.
          </p>
          
          <div className="skills-section">
            <h2>Skills</h2>
            <div className="skills-grid">
              <div className="skill-category">
                <h3>Graphic Design</h3>
                <ul>
                  <li>Brand Identity</li>
                  <li>Print Design</li>
                  <li>Digital Marketing Assets</li>
                  <li>UI/UX Design</li>
                  <li>Illustration</li>
                </ul>
              </div>
              
              <div className="skill-category">
                <h3>Video Editing</h3>
                <ul>
                  <li>Motion Graphics</li>
                  <li>Color Grading</li>
                  <li>Sound Design</li>
                  <li>Visual Effects</li>
                  <li>Narrative Storytelling</li>
                </ul>
              </div>
              
              <div className="skill-category">
                <h3>Software</h3>
                <ul>
                  <li>Adobe Creative Suite</li>
                  <li>Figma</li>
                  <li>Final Cut Pro</li>
                  <li>DaVinci Resolve</li>
                  <li>After Effects</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="experience-section">
            <h2>Experience</h2>
            <div className="timeline">
              <div className="timeline-item">
                <div className="timeline-date">2021 - Present</div>
                <div className="timeline-content">
                  <h3>Senior Visual Designer</h3>
                  <p>Creative Solutions Agency</p>
                  <p>Leading design projects for major brands, mentoring junior designers, and developing visual strategies.</p>
                </div>
              </div>
              
              <div className="timeline-item">
                <div className="timeline-date">2018 - 2021</div>
                <div className="timeline-content">
                  <h3>Motion Designer</h3>
                  <p>Digital Media Productions</p>
                  <p>Created animated content for social media campaigns, commercials, and brand videos.</p>
                </div>
              </div>
              
              <div className="timeline-item">
                <div className="timeline-date">2016 - 2018</div>
                <div className="timeline-content">
                  <h3>Graphic Designer</h3>
                  <p>Print & Digital Studio</p>
                  <p>Designed marketing materials, websites, and brand identities for small businesses.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="education-section">
            <h2>Education</h2>
            <div className="education-item">
              <h3>Bachelor of Fine Arts in Graphic Design</h3>
              <p>School of Visual Arts, 2016</p>
            </div>
            <div className="education-item">
              <h3>Certificate in Advanced Video Production</h3>
              <p>Digital Film Academy, 2018</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;