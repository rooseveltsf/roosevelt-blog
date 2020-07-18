import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import AniLink from "gatsby-plugin-transition-link/AniLink";

import { Container } from './styles';

function Pagination({ isFirst, isLast, currentPage, numPages, prevPage, nextPage }) {
  return (
    <Container>
      {!isFirst && <AniLink cover direction="left" bg="#f7f7f7" duration={1} to={prevPage}>← Página anterior</AniLink>}
      
      <p>{currentPage} de {numPages}</p>

      {!isLast && <AniLink cover direction="right" bg="#f7f7f7" duration={1} to={nextPage}> Página anterior →</AniLink>}
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