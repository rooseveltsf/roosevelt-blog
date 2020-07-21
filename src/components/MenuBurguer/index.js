import React, { useState } from 'react';

import Burguer from '../Burguer'
import MenuResponsive from '../MenuResponsive'

const MenuBurguer = ({ dark }) => {
  const[open, setOpen] = useState(false);

  function handleClick() {
    setOpen(!open);
  }

  return (
    <>
      <Burguer open={open} click={handleClick} />
      <MenuResponsive dark={dark} open={open} />
    </>
  )
}

export default MenuBurguer;