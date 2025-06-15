import React from 'react';
// This is how we use React Router
import { Routes, Route } from 'react-router-dom';
// My CSS file
import './styles/App.css';

// My components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// My pages
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Experience from './pages/Experience';
import Education from './pages/Education';
import Contact from './pages/Contact';

// This is my first React app!

// This is the main App function
function App() {
  // This is JSX - it looks like HTML but it's actually JavaScript!
  return (
    <div className="app">
      {/* This is my navigation bar */}
      <Navbar />
      <main className="main-content">
        {/* Routes help me navigate between pages */}
        <Routes>
          <Route path="/" element={<Home />} /> {/* Home page */}
          <Route path="/about" element={<About />} /> {/* About me */}
          <Route path="/skills" element={<Skills />} /> {/* My skills */}
          <Route path="/experience" element={<Experience />} /> {/* Work experience */}
          <Route path="/education" element={<Education />} /> {/* Education */}
          <Route path="/contact" element={<Contact />} /> {/* Contact page */}
        </Routes>
      </main>
      {/* This is my footer */}
      <Footer />
    </div>
  );
}

export default App;