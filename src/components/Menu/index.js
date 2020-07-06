import React from 'react';

import { Container } from './styles';

const Menu = () => {
  return (
    <Container>
      <ul>
        <li>
          <a href="/">Github</a>
        </li>
        <li>
          <a href="/">Linkedin</a>
        </li>
        <li>
          <a href="/">Instagram</a>
        </li>
      </ul>
    </Container>
  )
}

export default Menu;