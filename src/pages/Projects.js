import React, { useState } from 'react';
import '../styles/Projects.css';

// This is my Projects page component
function Projects() {
  // This is my projects data
  const allProjects = [
    {
      id: 1,
      title: 'E-commerce Website',
      category: 'Web Development',
      image: 'project-placeholder.jpg',
      description: 'A fully functional online store with product listings, shopping cart, and checkout process.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Stripe API'],
      link: '#',
      github: '#',
      featured: true
    },
    {
      id: 2,
      title: 'Weather Application',
      category: 'Web Development',
      image: 'project-placeholder.jpg',
      description: 'A weather app that displays current weather conditions and forecasts based on user location.',
      technologies: ['JavaScript', 'HTML', 'CSS', 'Weather API'],
      link: '#',
      github: '#',
      featured: true
    },
    {
      id: 3,
      title: 'Task Management System',
      category: 'Web Development',
      image: 'project-placeholder.jpg',
      description: 'A task management application with user authentication, task creation, and status tracking.',
      technologies: ['React', 'Firebase', 'CSS'],
      link: '#',
      github: '#',
      featured: true
    },
    {
      id: 4,
      title: 'Portfolio Website',
      category: 'Web Development',
      image: 'project-placeholder.jpg',
      description: 'A personal portfolio website to showcase my projects and skills (this website).',
      technologies: ['React', 'CSS', 'React Router'],
      link: '#',
      github: '#',
      featured: true
    },
    // {
    //   id: 5,
    //   title: 'Recipe Finder App',
    //   category: 'Mobile Development',
    //   image: 'project-placeholder.jpg',
    //   description: 'A mobile app that helps users find recipes based on ingredients they have at home.',
    //   technologies: ['React Native', 'JavaScript', 'Food API'],
    //   link: '#',
    //   github: '#',
    //   featured: false
    // },
    // {
    //   id: 6,
    //   title: 'Budget Tracker',
    //   category: 'Web Development',
    //   image: 'project-placeholder.jpg',
    //   description: 'A web application to track personal expenses and income with visualization charts.',
    //   technologies: ['JavaScript', 'Chart.js', 'HTML', 'CSS'],
    //   link: '#',
    //   github: '#',
    //   featured: false
    // },
    {
      id: 7,
      title: 'Movie Database',
      category: 'Web Development',
      image: 'project-placeholder.jpg',
      description: 'A web application to browse and search for movies, view details, and save favorites.',
      technologies: ['React', 'Movie Database API', 'CSS'],
      link: '#',
      github: '#',
      featured: false
    },
    // {
    //   id: 8,
    //   title: 'Fitness Tracker',
    //   category: 'Mobile Development',
    //   image: 'project-placeholder.jpg',
    //   description: 'A mobile app to track workouts, set fitness goals, and monitor progress.',
    //   technologies: ['React Native', 'JavaScript', 'Firebase'],
    //   link: '#',
    //   github: '#',
    //   featured: false
    // }
  ];

  // These are the categories for filtering
  const categories = ['All', 'Web Development', 'Mobile Development', 'UI/UX Design'];
  
  // This is for filtering projects by category
  const [activeCategory, setActiveCategory] = useState('All');
  
  // This filters the projects based on the selected category
  const filteredProjects = activeCategory === 'All' 
    ? allProjects 
    : allProjects.filter(project => project.category === activeCategory);

  return (
    <div className="projects-container">
      <h1 className="page-title">My Projects</h1>
      
      <div className="projects-intro">
        <p>
          Here are some of the projects I've worked on. I'm always learning and building new things!
          Feel free to check out the live demos or the code on GitHub.
        </p>
      </div>
      
      {/* Filter buttons */}
      <div className="filter-container">
        {categories.map((category, index) => (
          <button 
            key={index} 
            className={`filter-button ${activeCategory === category ? 'active' : ''}`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
      
      {/* Projects grid */}
      <div className="projects-grid">
        {filteredProjects.map(project => (
          <div className="project-card" key={project.id}>
            <div className="project-image placeholder">
              <p>Project Image</p>
            </div>
            
            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-category">{project.category}</p>
              <p className="project-description">{project.description}</p>
              
              <div className="project-technologies">
                {project.technologies.map((tech, i) => (
                  <span className="technology-tag" key={i}>{tech}</span>
                ))}
              </div>
              
              <div className="project-links">
                <a href={project.link} className="project-link" target="_blank" rel="noopener noreferrer">
                  Live Demo
                </a>
                <a href={project.github} className="project-link github" target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* No projects message */}
      {filteredProjects.length === 0 && (
        <div className="no-projects">
          <p>No projects found in this category. Check back later!</p>
        </div>
      )}
      
      {/* Contact section */}
      <section className="contact-section">
        <h2 className="section-title">Want to see more?</h2>
        <p className="contact-description">
          I'm always working on new projects. If you'd like to see more of my work or discuss a potential collaboration, feel free to reach out!
        </p>
        <a href="/contact" className="contact-button">
          Contact Me
        </a>
      </section>
    </div>
  );
}

export default Projects;