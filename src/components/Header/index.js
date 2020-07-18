import React, { useEffect } from 'react';

import SwitchButton from "../SwitchButton";
import { Container, MenuContainer, Title, Menu, LinkPage } from './styles';

const Links = [
  {
    name: 'Home',
    path: '/'
  },
  {
    name: 'Projetos',
    path: '/projects/'
  },
  {
    name: 'Sobre',
    path: '/about/'
  }
]

const Header = ({ dark }) => {

  const isDark = dark ? '#1b2027' : '#f7f7f7'

  return (
    <Container>
      <MenuContainer>
        <Title>me.</Title>

        <Menu>
          <ul>
            {Links.map(link => (
              <li key={link.name}>
                <LinkPage
                  cover
                  direction="right"
                  duration={1}
                  bg={isDark}
                  to={link.path}
                >
                  {link.name}
                </LinkPage>
              </li>
            ))}
          </ul>
        </Menu>
      </MenuContainer>

      <SwitchButton />
    </Container>
  )
}

export default Header;