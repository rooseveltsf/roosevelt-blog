import React from 'react';
import { useBreakpoint } from 'gatsby-plugin-breakpoints';

import Links from '../../utils/LinksNavigation';
import SwitchButton from "../SwitchButton";
import MenuBurguer from '../MenuBurguer';
import { Container, MenuContainer, Title, Menu, LinkPage } from './styles';

const Header = ({ dark }) => {
  const breakpoint = useBreakpoint();

  const isDark = dark ? '#1b2027' : '#f7f7f7'

  return (
    <Container>
      {breakpoint.sm ? (
        <MenuContainer>
          <Title>me.</Title>

          <MenuBurguer dark={dark} />

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