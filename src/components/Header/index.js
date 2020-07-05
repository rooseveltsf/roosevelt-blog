import React from 'react';

import { Container, Title, Menu, LinkPage } from './styles';

const Header = () => (
  <Container>
    <div>
      <Title>me.</Title>

      <Menu>
        <ul>
          <li><LinkPage to="/">Home</LinkPage></li>
          <li><LinkPage to="/projects">Projetos</LinkPage></li>
          {/* <li><LinkPage to="/">Sobre</LinkPage></li> */}
        </ul>
      </Menu>
    </div>

    <h2>Switch Button</h2>
  </Container>
)


export default Header;