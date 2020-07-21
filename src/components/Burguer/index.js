import React from 'react';

import { StyledBurger } from './styles';

const Burguer = ({ open, click }) => {

  return (
    <StyledBurger open={open} onClick={click}>
      <span />
      <span />
      <span />
    </StyledBurger>
  )
}

export default Burguer;