import React from 'react';

import { Container } from './styles';

const Header = () => (
  <Container>
    <h1>me.</h1>
    <nav>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/projects">Projetos</a></li>
        <li><a href="/">Sobre</a></li>
      </ul>
    </nav>
  </Container>
)


export default Header;