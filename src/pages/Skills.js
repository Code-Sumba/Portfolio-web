import React from 'react';
import '../styles/Skills.css';

// This is my Skills page component
function Skills() {
  // These are my skill levels
  const frontendSkills = [
    { name: 'HTML', level: 90 },
    { name: 'CSS', level: 85 },
    { name: 'JavaScript', level: 80 },
    { name: 'React', level: 75 },
    { name: 'Bootstrap', level: 85 },
    { name: 'Responsive Design', level: 90 },
  ];

  const backendSkills = [
    { name: 'Node.js', level: 70 },
    { name: 'Express', level: 65 },
    { name: 'MongoDB', level: 60 },
    { name: 'REST APIs', level: 75 },
    { name: 'Authentication', level: 65 },
  ];

  const otherSkills = [
    { name: 'Git', level: 80 },
    { name: 'GitHub', level: 85 },
    { name: 'VS Code', level: 90 },
    { name: 'Figma', level: 60 },
    { name: 'Responsive Design', level: 85 },
    { name: 'Problem Solving', level: 80 },
  ];

  // This function renders the skill bars
  function renderSkillBars(skills) {
    return skills.map((skill, index) => (
      <div className="skill-item" key={index}>
        <div className="skill-info">
          <p className="skill-name">{skill.name}</p>
          {/* Removed percentage display */}
        </div>
        <div className="skill-bar">
          <div 
            className="skill-progress" 
            style={{ width: `${skill.level}%` }}
          ></div>
        </div>
      </div>
    ));
  }

  return (
    <div className="skills-container">
      <h1 className="page-title">My Skills</h1>
      
      {/* Introduction section */}
      <section className="skills-intro">
        <p>
          Here are the technologies and tools I've been working with. I'm constantly learning and improving my skills to stay up-to-date with the latest web development trends.
        </p>
      </section>
      
      {/* Frontend skills section */}
      <section className="skills-section">
        <h2 className="section-title">Frontend Development</h2>
        <div className="skills-grid">
          {renderSkillBars(frontendSkills)}
        </div>
      </section>
      
      {/* Backend skills section */}
      <section className="skills-section">
        <h2 className="section-title">Backend Development</h2>
        <div className="skills-grid">
          {renderSkillBars(backendSkills)}
        </div>
      </section>
      
      {/* Other skills section */}
      <section className="skills-section">
        <h2 className="section-title">Tools & Other Skills</h2>
        <div className="skills-grid">
          {renderSkillBars(otherSkills)}
        </div>
      </section>
      
      {/* Technologies I use section */}
      <section className="technologies-section">
        <h2 className="section-title">Technologies I Use</h2>
        <div className="technologies-grid">
          {/* Technology 1 */}
          <div className="technology-card">
            <div className="technology-icon">⚛️</div>
            <h3 className="technology-name">React</h3>
            <p className="technology-description">
              A JavaScript library for building user interfaces with reusable components.
            </p>
          </div>
          
          {/* Technology 2 */}
          <div className="technology-card">
            <div className="technology-icon">🟢</div>
            <h3 className="technology-name">Node.js</h3>
            <p className="technology-description">
              A JavaScript runtime built on Chrome's V8 JavaScript engine for server-side development.
            </p>
          </div>
          
          {/* Technology 3 */}
          <div className="technology-card">
            <div className="technology-icon">🍃</div>
            <h3 className="technology-name">MongoDB</h3>
            <p className="technology-description">
              A NoSQL database that stores data in flexible, JSON-like documents.
            </p>
          </div>
          
          {/* Technology 4 */}
          <div className="technology-card">
            <div className="technology-icon">🅱️</div>
            <h3 className="technology-name">Bootstrap</h3>
            <p className="technology-description">
              A popular CSS framework for developing responsive and mobile-first websites.
            </p>
          </div>
          
          {/* Technology 5 */}
          <div className="technology-card">
            <div className="technology-icon">🔄</div>
            <h3 className="technology-name">Git</h3>
            <p className="technology-description">
              A distributed version control system for tracking changes in source code.
            </p>
          </div>
          
          {/* Technology 6 */}
          <div className="technology-card">
            <div className="technology-icon">🎨</div>
            <h3 className="technology-name">Figma</h3>
            <p className="technology-description">
              A collaborative interface design tool used for UI/UX design and prototyping.
            </p>
          </div>
        </div>
      </section>
      
      {/* Learning section */}
      <section className="learning-section">
        <h2 className="section-title">What I'm Learning</h2>
        <div className="learning-content">
          <p>
            I believe in continuous learning and staying updated with the latest technologies. Currently, I'm focusing on improving my skills in:
          </p>
          <ul className="learning-list">
            <li className="learning-item">TypeScript for type-safe JavaScript development</li>
            <li className="learning-item">Next.js for server-side rendering with React</li>
            <li className="learning-item">GraphQL for more efficient API queries</li>
            <li className="learning-item">AWS for cloud deployment and services</li>
            <li className="learning-item">Testing frameworks like Jest and React Testing Library</li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default Skills;