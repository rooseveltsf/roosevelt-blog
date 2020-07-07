import React from 'react';
// import { FiList, FiGrid, FiArrowUp, FiSearch } from "react-icons/fi";

import { Container } from './styles';

const Menu = () => {
  return (
    <Container>
      {/* <FiSearch size={32} /> */}
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

      {/* <FiArrowUp size={32} /> */}
    </Container>
  )
}

export default Menu;