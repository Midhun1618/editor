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
            <img src="/api/placeholder/500/500" alt="Profile" />
          </div>
        </div>

        <div className="about-text">
          <h2>Who I Am</h2>
          <p>
            I'm a passionate graphic designer and video editor with over 7 years of experience
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
                  <li>Visual Effects</li>
                  <li>Sound Design</li>
                  <li>Motion Graphics</li>
                  <li>Color Grading</li>
                  <li>Narrative Storytelling</li>
                </ul>
              </div>

              <div className="skill-category">
                <h3>Software</h3>
                <ul>
                  <li>Adobe Premiere Pro</li>
                  <li>After Effects</li>
                  <li>Photoshop</li>
                  <li>Figma</li>
                  <li>Figma</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="experience-section">
            <h2>Experience</h2>
            <div className="timeline">

              <div className="timeline-item">
                <div className="timeline-date">Dec 2024 - Jan 2025</div>
                <div className="timeline-content">
                  <h3>Video Editing Intern</h3>
                  <p>Growfluence</p>
                  <p>Edited daily reels and YouTube videos for various clients, ensuring high-quality content tailored for digital platforms.</p>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-date">Sep 2024 - Oct 2024</div>
                <div className="timeline-content">
                  <h3>Video Editor Intern</h3>
                  <p>Tellis Technologies</p>
                  <p>Worked on editing product showcase videos for the company’s apps presented to clients.</p>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-date">Nov 2021</div>
                <div className="timeline-content">
                  <h3>Freelance Video Editor</h3>
                  <p>Dance Cover Project</p>
                  <p>Shot and edited a dance cover video, handling all aspects from cinematography to post-production.</p>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-date">Nov 2020</div>
                <div className="timeline-content">
                  <h3>Short Film Editor</h3>
                  <p>AFTER-19 (COVID-Themed Short Film)</p>
                  <p>Edited and released a narrative short film reflecting the impact of the COVID-19 pandemic.</p>
                </div>
              </div>

            </div>
          </div>

          <div className="education-section">
            <h2>Education</h2>
            <div className="education-item">
              <h3>Bachelor of Technology in Computer Science and Engineering</h3>
              <p>Specialization in Machine Learning<br />Lovely Professional University, 2022 – 2026</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default About;