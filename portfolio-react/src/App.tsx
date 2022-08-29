import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Intro from './Components/Intro';
import About from './Components/About';
import Projects from './Components/Projects';
import './index'

const HeaderText = styled.div`
  font-size: 16px;
  color: blue;
`

function App() {
  
  return (
    <div className="App">
        <Intro />
        <About />
        <Projects />
    </div>
  );
}

export default App;
