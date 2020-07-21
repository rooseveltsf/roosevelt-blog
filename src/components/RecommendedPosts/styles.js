import styled from "styled-components"
import AniLink from "gatsby-plugin-transition-link/AniLink";

export const Container = styled.section`
  border-bottom: 1px solid var(--border);
  border-top: 1px solid var(--border);
  /* background: #192734; */
  display: flex;

`

export const RecommendedLink = styled(AniLink)`
  display: flex;
  align-items: center;
  /* background: #192734; */
  color: var(--text);;
  padding: 1.8rem;
  text-decoration: none;
  transition: background 0.5s;
  width: 50%;
  &:hover {
    background: var(--backgroundHeader);
    /* color: var(--background); */
  }
  &.previous {
    border-right: 1px solid var(--border);
  }
  &.next {
    justify-content: flex-end;
  }
  &.previous:before {
    content: "\\2190";
    margin-right: 0.5rem;
  }
  &.next:after {
    content: "\\2192";
    margin-left: 0.5rem;
  }
`