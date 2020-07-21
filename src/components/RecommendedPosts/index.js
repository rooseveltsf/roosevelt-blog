import React, { useContext } from 'react';

import { StateContext } from "../../context/StateContext";
import { Container, RecommendedLink } from './styles';

const RecommendedPosts = ({ next, previous, color }) => {

  const { dark } = useContext(StateContext);

  const isDark = dark ? '#1b2027' : '#f7f7f7'

  return (
    <Container>
      { previous && (
        <RecommendedLink
          cover
          direction="left"
          bg={isDark}
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
          bg={isDark}
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