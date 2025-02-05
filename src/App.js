import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'; // Ensure this line is present to load the CSS
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import { Container } from '@mui/material';

function App() {
  return (
    <Router basename="/Nick-sPortfolio.v2"> {/* Add basename for subdirectory */}
      <Navbar />
      <Container maxWidth="lg">
        <Routes>
          <Route path="/" element={<Home />} /> {/* This ensures Home.js is displayed on the root URL */}
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
