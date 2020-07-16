import styled from 'styled-components';

export const Header = styled.div`
  padding: 3rem 1.8rem 1rem 1.8rem;

  h2 {
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 16px;
    color: var(--title);
  }

  p {
    font-size: 1.5rem;
    color: var(--text);
  }
`;

export const Line = styled.div`
  height: 1px;
  width: 100%;
  background: linear-gradient(to right, var(--border), var(--background));
  margin-top: 8px;
  /* background: #707070; */
`;