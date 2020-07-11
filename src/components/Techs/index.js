import React from 'react';

import Line from '../Line';
import { Container, TechContainer } from './styles';

function Techs() {
  return (
    <Container>
      <TechContainer>
        <h3>Tecnologias</h3>
        <ul>
          <li>Javascript</li>
          <li>Node.js</li>
          <li>ReactJS</li>
          <li>React-native</li>
          <li>Git & Github</li>
        </ul>
      </TechContainer>
      <Line color="#3B93FB" />
    </Container>
  );
}

export default Techs;