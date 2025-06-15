import React from 'react';
import '../styles/About.css';

// This is my About page component
function About() {
  return (
    <div className="about-container">
      <h1 className="page-title">About Me</h1>
      
      {/* About me section */}
      <section className="about-section">
        <div className="about-image-container">
          {/* Placeholder for about image */}
          <div className="about-image-placeholder">
            <p><img src='src\assets\abhi images.jpg'></img></p>
          </div>
        </div>
        
        <div className="about-content">
          <h2 className="about-heading">Hi, I'm <span className="highlight">Abhishek Ashok Supekar</span></h2>
          <h3 className="about-subheading">Full Stack Web Developer</h3>
          
          <p className="about-text">
          Hi, I'm Abhishek Supekar — a passionate and self-driven full-stack web developer with a strong foundation in both frontend and backend technologies. 
          I specialize in building responsive, user-friendly web applications using the MERN stack (MongoDB, Express.js, React.js, Node.js).
          </p>
          
          <p className="about-text">
          Currently pursuing my engineering degree, I’ve already built projects that solve real-world problems — from educational platforms And e-commerce systems. 
          I’m constantly learning and experimenting with new tools and technologies, especially in AI, product development, and startup innovation.
          </p>
          
          <p className="about-text">
            When I'm not coding, you can find me hiking, playing kabbadi, or experimenting with Electricals things. I believe in continuous learning and am always looking to improve my skills.
          </p>
          
          <div className="personal-info">
            <div className="info-item">
              <span className="info-label">Name:</span>
              <span className="info-value">Abhishek</span>
            </div>
            
            <div className="info-item">
              <span className="info-label">Email:</span>
              <span className="info-value">supekarabhi84@gmail.com</span>
            </div>
            
            <div className="info-item">
              <span className="info-label">Location:</span>
              <span className="info-value">Ahemdnagar, India</span>
            </div>
            
            <div className="info-item">
              {/* <span className="info-label">Availability:</span>
              <span className="info-value"></span> */}
            </div>
          </div>
          
          <div className="about-buttons">
            <a href="https://drive.google.com/file/d/1niTgSN8Z3xYspfEXDIziRi5Kz3rKrT9p/view?usp=drive_link" className="button primary-button">Resume</a>
            <a href="#" className="button secondary-button">My Projects</a>
          </div>
        </div>
      </section>
      
      {/* What I do section */}
      <section className="services-section">
        <h2 className="section-title">What I Do</h2>
        
        <div className="services-grid">
          {/* Service 1 */}
          <div className="service-card">
            <div className="service-icon">🖥️</div>
            <h3 className="service-title">Web Development</h3>
            <p className="service-description">
              I create responsive websites that work on all devices using modern technologies like React and CSS frameworks.
            </p>
          </div>
          
          {/* Service 2 */}
          <div className="service-card">
            <div className="service-icon">📱</div>
            <h3 className="service-title">Mobile-First Design</h3>
            <p className="service-description">
              I ensure that all websites I build look great and function well on mobile devices, tablets, and desktops.
            </p>
          </div>
          
          {/* Service 3 */}
          <div className="service-card">
            <div className="service-icon">⚙️</div>
            <h3 className="service-title">Backend Development</h3>
            <p className="service-description">
              I build robust server-side applications using Node.js, Express, and MongoDB to power your web applications.
            </p>
          </div>
          
          {/* Service 4 */}
          <div className="service-card">
            <div className="service-icon">🔍</div>
            <h3 className="service-title">SEO Optimization</h3>
            <p className="service-description">
              I implement best practices to ensure your website ranks well in search engines and reaches your target audience.
            </p>
          </div>
        </div>
      </section>
      
      {/* My journey section */}
      <section className="journey-section">
        <h2 className="section-title">My Journey</h2>
        
        <div className="timeline">
          {/* Timeline item 1 */}
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-date">2021</div>
            <div className="timeline-content">
              <h3 className="timeline-title">Started Learning Web Development</h3>
              <p className="timeline-description">
                Began my coding journey with HTML, CSS, and basic JavaScript through online courses and thapa tutorials.
              </p>
            </div>
          </div>
          
          {/* Timeline item 2 */}
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-date">2021</div>
            <div className="timeline-content">
              <h3 className="timeline-title">First Mini Project</h3>
              <p className="timeline-description">
                Completed my first project, PS5 Controller Buying static page then started JEE Mains and MHT-CET Exam study
              </p>
            </div>
          </div>
          
          {/* Timeline item 3 */}
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-date">2023-2024</div>
            <div className="timeline-content">
              <h3 className="timeline-title">Learned Data structure and algorithm</h3>
              <p className="timeline-description">
                Expanded my skills to include Arrays,variable,Loops,Function, Graphs,Trees Using Java learn From Apna College
              </p>
            </div>
          </div>
          
          {/* Timeline item 4 */}
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-date">2025</div>
            <div className="timeline-content">
              <h3 className="timeline-title">Built Full-Stack Applications</h3>
              <p className="timeline-description">
                Created several full-stack applications using the MERN stack (MongoDB, Express, React, Node.js).
              </p>
            </div>
          </div>
          
          {/* Timeline item 5 */}
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-date">Present</div>
            <div className="timeline-content">
              <h3 className="timeline-title">Continuing to Learn and Grow</h3>
              <p className="timeline-description">
                Currently focusing on improving my skills and taking on new challenges in web development.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;