import React, { useState, useContext } from "react"
import PropTypes from "prop-types"

import { Container, Main } from "./styles";

import { StateContext } from '../../context/StateContext';

import Header from '../Header'
import Menu from '../Menu';

import SEO from '../seo'
import GlobalStyles from '../../styles/Global';

const Layout = ({ children, title }) => {
  // const[dark, setDark] = useState(false);
  const { dark } = useContext(StateContext);

  return (
    <Container>
      <SEO title={title} />
      <GlobalStyles dark={dark} />

      <Header />

      <Main>{children}</Main>

      <Menu />
    </Container>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
