import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import AniLink from "gatsby-plugin-transition-link/AniLink";

import { StateContext } from "../../context/StateContext";

import { Container } from './styles';

function Pagination({ isFirst, isLast, currentPage, numPages, prevPage, nextPage }) {

  const { dark } = useContext(StateContext);

  const isDark = dark ? '#1b2027' : '#f7f7f7'
  return (
    <Container>
      {!isFirst && <AniLink cover direction="left" bg={isDark} duration={1} to={prevPage}>← Página anterior</AniLink>}
      
      <p>{currentPage} de {numPages}</p>

      {!isLast && <AniLink cover direction="right" bg={isDark} duration={1} to={nextPage}> Página anterior →</AniLink>}
    </Container>
  )
}

Pagination.propTypes = {
  isFirst: PropTypes.bool.isRequired,
  isLast: PropTypes.bool.isRequired,
  currentPage: PropTypes.number.isRequired,
  numPages: PropTypes.number.isRequired,
  prevPage: PropTypes.string,
  nextPage: PropTypes.string
}

export default Pagination;