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
import Responsive from './components/Responsive';
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';

function App() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);

  };

  return (
    
    <>
      <div>
     
        {!isMenuOpen ?  <Hamburger onClick={toggleMenu} />:""}
     
      <Menu isOpen={isMenuOpen} onClose={toggleMenu} />

        <Responsive/>
        <Navbar />
       
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
