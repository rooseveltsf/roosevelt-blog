import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

import { Container } from './styles';

function Pagination({ isFirst, isLast, currentPage, numPages, prevPage, nextPage }) {
  return (
    <Container>
      {!isFirst && <Link to={prevPage}>Página anterior</Link>}
      
      <p>{currentPage} de {numPages}</p>

      {!isLast && <Link to={nextPage}>Página anterior</Link>}
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