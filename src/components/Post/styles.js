import styled from "styled-components"
import media from "styled-media-query"

export const PostHeader = styled.header`
  color: var(--title);
  padding: 5rem 2rem 0;

  ${media.lessThan("medium")`
    padding: 3rem 0 0;
    max-width: 100%;
  `}
`
export const PostHeaderBorder = styled.div`
  background: ${({ color }) =>
    color ?
      `linear-gradient(to right, ${color}, var(--background))` :
      'linear-gradient(to right, #333, var(--background))'};
  height: 2px;
  width: 100%;
  margin: 8px 0 32px 0;

`

export const PostTitle = styled.h1`
  font-size: 4rem;
  font-weight: 700;
  /* padding: 0 1.4rem; */
  margin: 1rem auto;

  ${media.lessThan("medium")`
    font-size: 2.8rem;
    line-height: 1.1;
    padding: 0 1rem;
  `}
`

export const PostDescription = styled.h2`
  font-size: 1.8rem;
  font-weight: 300;
  /* padding: 0 1.4rem; */
  color: var(--text);

  ${media.lessThan("medium")`
    font-size: 1.6rem;
    line-height: 1.3;
    padding: 0 1rem;
  `}
`

export const PostDate = styled.p`
  font-size: 1.1rem;
  font-weight: 300;
  /* padding: 0 1.4rem; */
  color: var(--textDescription);

  ${media.lessThan("medium")`
    padding: 0 1rem;
  `}
`

export const MainContent = styled.section`
  color: var(--text);
  margin: auto;
  max-width: 70rem;
  margin: 8px 0 32px 0;
  text-align: justify;
  padding: 0 1.5rem;

  ${media.lessThan("medium")`
    padding: 2rem 0;
    max-width: 100%;
  `}

  p,
  h1,
  h2,
  h3,
  h4,
  ul,
  ol,
  .tags,
  iframe,
  .button-post {
    color: var(--text);
    font-size: 1.25rem;
    /* font-weight: 300; */
    line-height: 1.7;
    letter-spacing: 0.069rem;
    padding: 0 1.4rem;

    ${media.lessThan("medium")`
      padding: 0 1rem;
      word-break: break-word;
    `}
  }
  p {
    margin: 0 auto 1.6rem;
    font-size: 1.1rem;
  }
  h1,
  h2,
  h3,
  h4,
  h5 {
    margin: 2.4rem auto 1rem;
  }
  ul,
  ol {
    list-style: circle;
    padding-left: 2.5rem;
    margin: 0 auto 1.6rem;
  }
  li {
    padding: 0.250rem 0;
    & > ul {
      margin-bottom: 0;
    }
  }
  p,
  li {
    code {
      word-wrap: break-word;
    }
  }
  img {
    display: block;
    max-width: 100%;
    margin: 1.875rem auto;
  }
  iframe {
    padding: 0 1.6rem 1.6rem;
    width: 100%;

    ${media.lessThan("medium")`
      padding: 0 1rem;
    `}
  }
  blockquote {
    color: #333;
    border-left: 0.3rem solid #1fa1f2;
    padding: 0 1.875rem;
    margin: 3.125rem auto;
  }
  hr {
    border: 1px solid #38444d;
    margin: 3rem auto;
  }
  #twitter-widget-0,
  .instagram-media,
  .twitter-tweet {
    margin: 20px auto !important;
  }
  h1,
  h2,
  h3,
  h4,
  h5 {
    font-weight: 800;
    letter-spacing: 0.069rem;
    line-height: 1.4;
  }
  h1 {
    font-size: 2.8rem;

    ${media.lessThan("medium")`
      font-size: 1.875rem;
    `}
  }
  h2 {
    font-size: 2.1rem;

    ${media.lessThan("medium")`
      font-size: 1.125rem;
    `}

  }
  h3 {
    font-size: 1.6rem;

    ${media.lessThan("medium")`
      font-size: 1.125rem;
    `}
  }
  h4 {
    font-size: 1.4rem;
  }
  h5 {
    font-size: 1.2rem;
  }
  strong {
    font-weight: 700;
  }
  .gatsby-resp-image-background-image {
    z-index: 2;
    opacity: 1 !important;
  }
  .gatsby-resp-image-image {
    box-shadow: none !important;
    transition: opacity 0.2s;
    &.lazyload {
      opacity: 0;
    }
    &.lazyloaded {
      opacity: 1;
      z-index: 3;
    }
  }
  .gatsby-highlight {
    padding: 0 1.6rem 1.6rem;

    ${media.lessThan("medium")`
      padding: 0;
    `}
  }
  .instagram-media {
    margin: 1rem auto !important;
  }
  a {
    border-bottom: 1px dashed #1fa1f2;
    color: #1fa1f2;
    text-decoration: none;
    transition: opacity 0.5s;
    svg {
      color: #333;
    }
    &:hover {
      opacity: 0.8;
    }
  }
`