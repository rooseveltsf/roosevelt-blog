import styled from 'styled-components';
import media from "styled-media-query"

export const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem 1.3rem;
  border-top: 1px solid var(--border);
  color: var(--text);

  a {
    color: var(--text);
    text-decoration: none;
    transition: color 0.2s;
    cursor: pointer;

    &:hover {
      color: #F2A365;
    }
  }

  ${media.lessThan("small")`
    font-size: .9rem;
    padding: 1rem;
  `}
`;
