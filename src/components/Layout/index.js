import React from "react"
import PropTypes from "prop-types"

import { Container, Main, ContainerHeader } from "./styles";

import Header from '../Header'
import Menu from '../Menu';
import SEO from '../seo'
import GlobalStyles from '../../styles/Global';

const Layout = ({ children, title }) => (
  <Container>
    <SEO title={title} />
    <GlobalStyles />

    <Header />

    <Main>{children}</Main>

    <Menu />
  </Container>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
