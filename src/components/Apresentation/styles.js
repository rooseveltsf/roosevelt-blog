import styled from 'styled-components';

export const Container = styled.div`
  height: 5rem;
  width: 28rem;
  margin: 70px 0;

  display: flex;
  
  div {
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    h3 {
      font-size: 28px;
      font-weight: bold;
    }

    p {
      color: #575656;
      font-size: 16px;
    }
  }
`;