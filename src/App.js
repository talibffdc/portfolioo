import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Contact from './components/Contact';
import About from './components/About';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import Firstpage from './Firstpage';
import Hamburger from './Hamburger';
import Menu from './Menu';

function App() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);

  };

  return (
    <>
      <div>
      <Hamburger onClick={toggleMenu} />
      <Menu isOpen={isMenuOpen} onClose={toggleMenu} />

        
        <Navbar />
        <div className="navdown">
          <h6></h6>
        </div>
        <Firstpage />
        <About />
        <Skills />
        <Portfolio />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
