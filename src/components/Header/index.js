import React from 'react';
import { useBreakpoint } from 'gatsby-plugin-breakpoints';

import SwitchButton from "../SwitchButton";
import Burguer from '../Burguer';
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
  const breakpoint = useBreakpoint();

  const isDark = dark ? '#1b2027' : '#f7f7f7'

  return (
    <Container>
      {breakpoint.sm ? (
        <MenuContainer>
          <Title>me.</Title>


          <Burguer/>
        </MenuContainer>
      ) : (
        <>
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
        </>
      )}
    </Container>
  )
}

export default Header;