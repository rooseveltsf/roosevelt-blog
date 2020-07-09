import React from 'react';

import SwitchButton from "../SwitchButton";
import { Container, Title, Menu, LinkPage } from './styles';

const Header = () => (
  <Container>
    <div>
      <Title>me.</Title>

      <Menu>
        <ul>
          <li><LinkPage to="/">Home</LinkPage></li>
          <li><LinkPage to="/projects/">Projetos</LinkPage></li>
          <li><LinkPage to="/about">Sobre</LinkPage></li>
        </ul>
      </Menu>
    </div>

    <SwitchButton />
  </Container>
)


export default Header;