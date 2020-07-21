import React from 'react';
import AniLink from "gatsby-plugin-transition-link/AniLink";

import Links from '../../utils/LinksNavigation';

import { StyledMenu } from './styles';
import SwitchButton from '../SwitchButton';

const MenuResponsive = ({ open, dark }) => {

  const isDark = dark ? '#1b2027' : '#f7f7f7'

  return (
    <StyledMenu open={open}>
      {Links.map(link => (
        <AniLink paintDrip hex={isDark} duration={0.6} to={link.path}>
          {link.name}
        </AniLink>
      ))}
      <div>
        <SwitchButton />
      </div>
    </StyledMenu>
  )
}
export default MenuResponsive;