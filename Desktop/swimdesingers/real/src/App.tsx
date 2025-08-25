import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import About from './components/About';
import ProjectMap from './components/Testimonials';
import Footer from './components/Footer';
import AboutUs from './pages/AboutUs';
import OurServ from './pages/OurServ';
import Top from './pages/Top';

// Home page component
const HomePage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Services />
      <Portfolio />
      <About />
      <ProjectMap />
      <Footer />
    </div>
  );
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/ourserv" element={<OurServ />} />
        <Route path="/top" element={<Top />} />
      </Routes>
    </Router>
  );
}

export default App;