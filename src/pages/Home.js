import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

// This is my Home page component
function Home() {
  return (
    <div className="home-container">
      {/* Hero section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Hi, I'm <span className="highlight">Abhishek Supekar</span></h1>
          <h2 className="hero-subtitle">Full Stack Web Developer</h2>
          <p className="hero-description">
            I build amazing websites and applications using React, Node.js, and MongoDB.
            Also done Data structure and algorithm
          </p>
          <div className="hero-buttons">
            <Link to="/contact" className="button primary-button">
              Contact Me
            </Link>
            <Link to="/about" className="button secondary-button">
              Know more
            </Link>
          </div>
        </div>
        <div className="hero-image">
          {/* Placeholder for profile image */}
          <div className="profile-image-placeholder">
            <p><img src="src\assets\abhi images.jpg"/></p>
          </div>
        </div>
      </section>

      {/* Featured projects section */}
      <section className="featured-section">
        <h2 className="section-title">Featured Projects</h2>
        <div className="projects-grid">
          {/* Project 1 */}
          <div className="project-card">
            <div className="project-image placeholder">
              <img src="C:\Users\user\OneDrive\Desktop\New port\src\assets\Picture1.jpg"/>
            </div>
            <h3 className="project-title">E-commerce Website</h3>
            <p className="project-description">
              A fully functional online store built with React and Node.js.
            </p>
            <div className="project-tags">
              <span className="tag">React</span>
              <span className="tag">Node.js</span>
              <span className="tag">MongoDB</span>
            </div>
            <a href="#" className="project-link">View Project</a>
          </div>

          {/* Project 2 */}
          <div className="project-card">
            <div className="project-image placeholder">
              <p>   <img src="C:\Users\user\OneDrive\Desktop\New port\src\assets\Picture1.jpg"/></p>
            </div>
            <h3 className="project-title">Weather App</h3>
            <p className="project-description">
              A weather application that shows current weather and forecasts.
            </p>
            <div className="project-tags">
              <span className="tag">React</span>
              <span className="tag">API</span>
              <span className="tag">CSS</span>
            </div>
            <a href="#" className="project-link">View Project</a>
          </div>

          {/* Project 3 */}
          <div className="project-card">
            <div className="project-image placeholder">
              <p>   <img src="C:\Users\user\OneDrive\Desktop\New port\src\assets\Picture1.jpg"/></p>
            </div>
            <h3 className="project-title">Task Manager</h3>
            <p className="project-description">
              A task management application with user authentication.
            </p>
            <div className="project-tags">
              <span className="tag">React</span>
              <span className="tag">Node.js</span>
              <span className="tag">Express</span>
            </div>
            <a href="#" className="project-link">View Project</a>
          </div>
        </div>
      </section>

      {/* Skills overview section */}
      <section className="skills-overview">
        <h2 className="section-title">My Skills</h2>
        <div className="skills-container">
          <div className="skill-category">
            <h3 className="category-title">Frontend</h3>
            <ul className="skills-list">
              <li className="skill-item">HTML</li>
              <li className="skill-item">CSS</li>
              <li className="skill-item">JavaScript</li>
              <li className="skill-item">React</li>
              <li className="skill-item">Bootstrap</li>
            </ul>
          </div>
          <div className="skill-category">
            <h3 className="category-title">Backend</h3>
            <ul className="skills-list">
              <li className="skill-item">Node.js</li>
              <li className="skill-item">Express</li>
              <li className="skill-item">MongoDB</li>
              <li className="skill-item">REST APIs</li>
            </ul>
          </div>
          <div className="skill-category">
            <h3 className="category-title">Tools</h3>
            <ul className="skills-list">
              <li className="skill-item">Git</li>
              <li className="skill-item">GitHub</li>
              <li className="skill-item">VS Code</li>
              <li className="skill-item">Figma</li>
            </ul>
          </div>
        </div>
        <div className="skills-button">
          <Link to="/skills" className="button primary-button">
            View All Skills
          </Link>
        </div>
      </section>

      {/* Call to action section */}
      <section className="cta-section">
        {/* <h2 className="cta-title">Let's Work Together!</h2> */}
        {/* <p className="cta-description">
          I'm currently available for freelance work and full-time positions.
        </p> */}
        <Link to="/contact" className="button primary-button">
          Get In Touch
        </Link>
      </section>
    </div>
  );
}

export default Home;