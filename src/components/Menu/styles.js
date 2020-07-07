import styled from 'styled-components';

export const Container = styled.div`
  width: 5rem;
  height: 100vh;
  position: fixed;
  right: 0;

  display: flex;
  align-items: center;
  justify-content: center;
  border-left: 2px solid #D1CCCC;

  ul {
    list-style: none;
    display: flex;
    flex-direction: column;

    li {
      margin: 54px 0;
      writing-mode: vertical-rl;
 
      a {
        text-decoration: none;
        color: #707070;
        font-size: 16px;
      }
    }
  }
`;
