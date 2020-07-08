import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem 1.3rem;
  border-top: 1px solid #D1CCCC;
  color: #575656;

  a {
    color: #575656;
    text-decoration: none;
    transition: color 0.5s;
    cursor: pointer;

    &:hover {
      color: tomato;
    }
  }
`;
