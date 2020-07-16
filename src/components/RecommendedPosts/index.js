import React from 'react';

import { Container, RecommendedLink } from './styles';

const RecommendedPosts = ({ next, previous, color }) => {
  return (
    <Container>
      { previous && (
        <RecommendedLink color={color} to={previous.fields.slug} className="previous">{previous.frontmatter.title}</RecommendedLink>
      )}
      {next && (
        <RecommendedLink to={next.fields.slug} className="next">{next.frontmatter.title}</RecommendedLink>
      )}
    </Container>
  );
}

export default RecommendedPosts;