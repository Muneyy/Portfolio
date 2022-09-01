import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Intro from './Components/Intro';
import About from './Components/About';
import Projects from './Components/Projects';
import './index'
import Contact from './Components/Contact';
import Nav from './Components/Nav';

function App() {
  
  return (
    <div className="App">
        <Nav />
        <Intro />
        <About />
        <Projects />
        <Contact />
    </div>
  );
}

export default App;
