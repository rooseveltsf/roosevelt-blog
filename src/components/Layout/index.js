import React, { useContext } from "react"
import { TransitionPortal } from 'gatsby-plugin-transition-link'
import PropTypes from "prop-types"

import { Container, Main } from "./styles";

import { StateContext } from '../../context/StateContext';

import Header from '../Header'
import Menu from '../Menu';

import SEO from '../seo'
import GlobalStyles from '../../styles/Global';

const Layout = ({ children, title, description, image }) => {
  const { dark } = useContext(StateContext);

  return (
    <Container>
      <SEO title={title} description={description || ''} image={image || ''} />
      <GlobalStyles dark={dark} />

      <TransitionPortal level="top">
        <Header dark={dark} />
      </TransitionPortal>

      <Main>{children}</Main>

      <TransitionPortal level="top">
        <Menu />
      </TransitionPortal>
    </Container>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
