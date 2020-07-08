import React from 'react';
import Links from './links';

import { Container } from './styles';

const Menu = () => {
  return (
    <Container>
      <ul>
        {Links.map(link => (
          <li key={link.name}>
            <a href={link.link} rel="noreferrer" target="_blank" >{link.name}</a>
          </li>
        ))}
      </ul>
    </Container>
  )
}

export default Menu;