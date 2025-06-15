import React, { useState } from 'react';
import '../styles/Contact.css';

// This is my Contact page component
function Contact() {
  // These are my form state variables
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  // This is for form submission status
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    error: false,
    message: ''
  });

  // This handles input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // This handles form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Check if all fields are filled
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus({
        submitted: true,
        error: true,
        message: 'Please fill in all required fields.'
      });
      return;
    }
    
    // Check if email is valid
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setFormStatus({
        submitted: true,
        error: true,
        message: 'Please enter a valid email address.'
      });
      return;
    }
    
    // In a real app, you would send the form data to a server here
    // For now, we'll just simulate a successful submission
    setFormStatus({
      submitted: true,
      error: false,
      message: 'Your message has been sent successfully! I will get back to you soon.'
    });
    
    // Reset form after successful submission
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    
    // Reset form status after 5 seconds
    setTimeout(() => {
      setFormStatus({
        submitted: false,
        error: false,
        message: ''
      });
    }, 5000);
  };

  return (
    <div className="contact-container">
      <h1 className="page-title">Contact Me</h1>
      
      <div className="contact-content">
        <div className="contact-info">
          <h2 className="section-title">Get In Touch</h2>
          <p className="contact-description">
            I'm interested in opportunities – especially ambitious or large projects. 
            However, if you have other requests, don't hesitate to contact me using the form.
          </p>
          
          <div className="contact-details">
            <div className="contact-item">
              <div className="contact-icon">
                <i className="fas fa-map-marker-alt">📍</i>
              </div>
              <div className="contact-text">
                <h3>Location</h3>
                <p>Avsari khurd, pune</p>
              </div>
            </div>
            
            <div className="contact-item">
              <div className="contact-icon">
                <i className="fas fa-envelope">✉️</i>
              </div>
              <div className="contact-text">
                <h3>Gmail</h3>
                <p>supekarabhi84@gmail.com</p>
              </div>
            </div>
            
            <div className="contact-item">
              <div className="contact-icon">
                <i className="fas fa-phone">📞</i>
              </div>
              <div className="contact-text">
                <h3>Phone</h3>
                <p>+91 9699984627</p>
              </div>
            </div>
          </div>
          
          <div className="social-links">
            <h3>Find Me On</h3>
            <div className="social-icons">
              <a href="https://www.linkedin.com/in/abhishekashoksupekar/" className="social-icon" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin">LinkedIn</i>
              </a>
              <a href="https://github.com/Code-Sumba" className="social-icon" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github">GitHub</i>
              </a>
              <a href="wa.link/f4hm3i" className="social-icon" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-Whatsapp">Whatsapp</i>
              </a>
            </div>
          </div>
        </div>
        
        <div className="contact-form-container">
          <h2 className="section-title">Send Me a Message</h2>
          
          {/* Form status message */}
          {formStatus.submitted && (
            <div className={`form-message ${formStatus.error ? 'error' : 'success'}`}>
              {formStatus.message}
            </div>
          )}
          
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name <span className="required">*</span></label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email <span className="required">*</span></label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="message">Message <span className="required">*</span></label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                rows="6"
                required
              ></textarea>
            </div>
            
            <button type="submit" className="submit-button">
              Send Message
            </button>
          </form>
        </div>
      </div>
      
      {/* FAQ Section */}
      <div className="faq-section">
        {/* <h2 className="section-title">Frequently Asked Questions</h2> */}
        
        <div className="faq-container">
          <div className="faq-item">
            {/* <h3 className="faq-question">What services do you offer?</h3> */}
            {/* <p className="faq-answer">
              I offer web development services including frontend development with React, 
              backend development with Node.js, and full-stack development for complete web applications.
            </p> */}
          </div>
          
          <div className="faq-item">
            {/* <h3 className="faq-question">How much do you charge for a website?</h3> */}
            {/* <p className="faq-answer">
              My rates depend on the project scope, complexity, and timeline. I offer competitive pricing 
              and can provide a detailed quote after discussing your specific requirements.
            </p> */}
          </div>
          
          <div className="faq-item">
            {/* <h3 className="faq-question">How long does it take to complete a project?</h3> */}
            {/* <p className="faq-answer">
              Project timelines vary based on complexity and scope. A simple website might take 2-4 weeks, 
              while more complex applications can take several months. I'll provide a timeline estimate 
              during our initial consultation.
            </p> */}
          </div>
          
          <div className="faq-item">
            {/* <h3 className="faq-question">Do you offer maintenance services?</h3> */}
            {/* <p className="faq-answer">
              Yes, I offer website maintenance services to keep your site up-to-date, secure, and running smoothly. 
              I can provide regular updates, security patches, and content changes as needed.
            </p> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;