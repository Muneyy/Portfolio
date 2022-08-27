import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Intro from './Components/Intro';

const HeaderText = styled.div`
  font-size: 16px;
  color: blue;
`

function App() {
  
  return (
    <div className="App">
        <Intro />
    </div>
  );
}

export default App;
