import React from 'react';
import '../styles/Experience.css';

// This is my Experience page component
function Experience() {
  // This is my work experience data
  const experiences = [
    {
      title: 'Frontend Developer',
      company: 'Enlentic Reserach centre',
      period: 'oct 2023 - june 2024',
      description: [
        'Developed responsive web applications using React and CSS framework',
        'Collaborated with designers to implement UI/UX designs',
        'Optimized website performance and loading times',
        'Participated in code reviews and team meetings'
      ],
      technologies: ['React', 'JavaScript', 'CSS', 'HTML', 'Git']
    },
    {
      title: 'Founder',
      company: 'Mindzspark',
      period: 'june 2024 - present',
     
      description: [
        'Developed responsive web applications using React and CSS frameworks',
        'Collaborated with people to get audience',
        'Get knoweldge about marketing through online platfrom',
        'Also done content writting '
      ],
      technologies: ['React', 'JavaScript', 'CSS', 'HTML', 'Git','whatsapp','facebook','telegram']
    }
  
  ]
 
  const projects = [
    {
      title: 'E-commerce Website',
      description: 'A fully functional online store with product listings, shopping cart, and checkout process.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Stripe API'],
      link: '#'
    },
  
    {
      title: 'Task Management System',
      description: 'A task management application with user authentication, task creation, and status tracking.',
      technologies: ['React', 'Firebase', 'CSS'],
      link: '#'
    },
    {
      title: 'Portfolio Website',
      description: 'A personal portfolio website to showcase my projects and skills (this website).',
      technologies: ['React', 'CSS', 'React Router'],
      link: '#'
    }
  ];

  return (
    <div className="experience-container">
      <h1 className="page-title">My Experience</h1>
      
      {/* Work experience section */}
      <section className="work-experience-section">
        <h2 className="section-title">Work Experience</h2>
        
        <div className="experience-timeline">
          {experiences.map((exp, index) => (
            <div className="experience-card" key={index}>
              <div className="experience-header">
                <h3 className="experience-title">{exp.title}</h3>
                <p className="experience-company">{exp.company}</p>
                <p className="experience-period">{exp.period}</p>
              </div>
              
              <div className="experience-content">
                <ul className="experience-description">
                  {exp.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
                
                <div className="experience-technologies">
                  <h4>Technologies used:</h4>
                  <div className="technologies-list">
                    {exp.technologies.map((tech, i) => (
                      <span className="technology-tag" key={i}>{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      
      {/* Projects section */}
      <section className="projects-section">
        <h2 className="section-title">Projects</h2>
        
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <div className="project-image placeholder">
                <p>Project Image</p>
              </div>
              
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="project-technologies">
                  {project.technologies.map((tech, i) => (
                    <span className="technology-tag" key={i}>{tech}</span>
                  ))}
                </div>
                
                <a href={project.link} className="project-link" target="_blank" rel="noopener noreferrer">
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
      
      {/* Call to action section */}
      <section className="cta-section">
        <h2 className="cta-title">Interested in working together?</h2>
        <p className="cta-description">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
        </p>
        <a href="/contact" className="cta-button">
          Let's Talk
        </a>
      </section>
    </div>
  );
}

export default Experience;