import styled from 'styled-components';

export const Container = styled.div`
  height: 5rem;
  width: 25rem;
  margin: 65px 0;
  align-self: ${({ left }) => left ? 'flex-start' : 'flex-end'};

  display: flex;
  
  div {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    text-align: ${({ left }) => left ? 'left' : 'right'};

    h3 {
      font-size: 28px;
      font-weight: bold;
    }

    p {
      font-family: Roboto;
      color: #575656;
      font-size: 16px;
    }
  }
`;