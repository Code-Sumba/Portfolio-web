import React from 'react';
import '../styles/Education.css';

// This is my Education page component
function Education() {
  // This is my education data
  const educationData = [
    {
      degree: 'Bachelor of Electronics And Telecommunication',
      college: 'Government College of Engineering & Research, Avasari Khurd ',
      period: '2023 - 2027',
      description: 'Studing data structures, algorithms, and software development. Participated in coding competitions and hackathons.',
      courses: [
        'Data Structures and Algorithms',
        'Web Development',
        'Database Systems',
        'Software Engineering',
        'Computer Networks'
      ]
    },
    // {
    //   degree: 'Web Development Bootcamp',
    //   school: 'Code Academy',
    //   period: 'Jan 2022 - Jun 2022',
    //   description: 'Intensive 6-month bootcamp focused on modern web development technologies and practices. Built several projects using React, Node.js, and MongoDB.',
    //   courses: [
    //     'Frontend Development with React',
    //     'Backend Development with Node.js',
    //     'Database Design with MongoDB',
    //     'RESTful API Development',
    //     'Deployment and DevOps'
    //   ]
    // },
    {
      degree: 'School',
      school: 'Shri chhatrapati shivaji vidyalaya',
      period: '2016 - 2021',
      description: ' Shri Chhatrapati Shivaji Vidyalaya, where I studied up to 10th grade.',
      courses: [
        'Math',
        'marathi',
        'Physics',
        'English',
        'History'
      ]
    }
  ];

  // This is my certifications data
  const certifications = [
    {
      name: 'Data Structures and Algorithms Certification',
      issuer: '',
      date: 'August 2024',
      description: ''
    },
    // {
    //   name: 'JavaScript Algorithms and Data Structures',
    //   issuer: 'freeCodeCamp',
    //   date: 'May 2023',
    //   description: 'Certification covering JavaScript fundamentals, ES6, regular expressions, debugging, data structures, and algorithm scripting.'
    // },
    // {
    //   name: 'Responsive Web Design',
    //   issuer: 'freeCodeCamp',
    //   date: 'February 2023',
    //   description: 'Certification covering HTML, CSS, responsive design principles, and accessibility.'
    // },
    // {
    //   name: 'Introduction to Git and GitHub',
    //   issuer: 'Coursera',
    //   date: 'December 2022',
    //   description: 'Course covering version control fundamentals, Git commands, branching, merging, and GitHub collaboration.'
    // }

  ];

  return (
    <div className="education-container">
      <h1 className="page-title">My Education</h1>
      
      {/* Education section */}
      <section className="education-section">
        <h2 className="section-title">Academic Background</h2>
        
        <div className="education-timeline">
          {educationData.map((edu, index) => (
            <div className="education-card" key={index}>
              <div className="education-header">
                <h3 className="education-degree">{edu.degree}</h3>
                <p className="education-school">{edu.school}</p>
                <p className="education-period">{edu.period}</p>
              </div>
              
              <div className="education-content">
                <p className="education-description">{edu.description}</p>
                
                <div className="education-courses">
                  <h4>Key Courses:</h4>
                  <ul className="courses-list">
                    {edu.courses.map((course, i) => (
                      <li key={i}>{course}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      
      {/* Certifications section */}
      <section className="certifications-section">
        <h2 className="section-title">Certifications</h2>
        
        <div className="certifications-grid">
          {certifications.map((cert, index) => (
            <div className="certification-card" key={index}>
              <div className="certification-header">
                <h3 className="certification-name">{cert.name}</h3>
                <p className="certification-issuer">{cert.issuer}</p>
                <p className="certification-date">{cert.date}</p>
              </div>
              
              <div className="certification-content">
                <p className="certification-description">{cert.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      
      {/* Learning philosophy section */}
      {/* <section className="learning-section">
        <h2 className="section-title">My Learning Philosophy</h2>
        
        <div className="learning-content">
          <p>
            I believe in continuous learning and staying updated with the latest technologies and best practices in web development. 
            My approach to learning combines structured education with hands-on project experience and self-directed study.
          </p>
          
          <p>
            I enjoy challenging myself with new concepts and technologies, and I'm always looking for opportunities to expand my knowledge and skills.
            Whether it's through online courses, technical books, coding challenges, or building personal projects, I'm committed to growing as a developer.
          </p>
          
          <div className="learning-goals">
            <h3>Current Learning Goals:</h3>
            <ul>
              <li>Advanced React patterns and performance optimization</li>
              <li>TypeScript for large-scale applications</li>
              <li>GraphQL and Apollo Client</li>
              <li>Cloud services and serverless architecture</li>
              <li>Mobile development with React Native</li>
            </ul>
          </div>
        </div>
      </section> */}
    </div>
  );
}

export default Education;