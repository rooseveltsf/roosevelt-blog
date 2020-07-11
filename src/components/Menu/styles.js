import styled from 'styled-components';

export const Container = styled.div`
  width: 4rem;
  height: 100vh;
  position: fixed;
  right: 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-left: 1px solid #DEDEDE;
  background: #eee;

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
