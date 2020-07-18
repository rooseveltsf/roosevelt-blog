import React from 'react';

import { Container, RecommendedLink } from './styles';

const RecommendedPosts = ({ next, previous, color }) => {
  return (
    <Container>
      { previous && (
        <RecommendedLink
          cover
          direction="left"
          bg="#f7f7f7"
          duration={1}
          color={color}
          to={previous.fields.slug}
          className="previous"
        >
          {previous.frontmatter.title}
        </RecommendedLink>
      )}
      {next && (
        <RecommendedLink
          cover
          direction="right"
          bg="#f7f7f7"
          duration={1}
          to={next.fields.slug}
          className="next"
        >
          {next.frontmatter.title}
        </RecommendedLink>
      )}
    </Container>
  );
}

export default RecommendedPosts;