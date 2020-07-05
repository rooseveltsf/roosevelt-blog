import React from "react"
import PropTypes from "prop-types"

import { Container, Main } from "./styles";

import Header from '../Header'
import GlobalStyles from '../../styles/Global';

const Layout = ({ children }) => (
  <Container>
    <Header />
    <Main>{children}</Main>
    <GlobalStyles />
  </Container>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
