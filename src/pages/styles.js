import styled from 'styled-components';

export const Container = styled.div`
  /* background: tomato; */
  padding: 32px;
  flex: 1;

  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const ContainerTitle = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 54px;
  height: 18rem;

  h2 {
    font-size: 9.5em;
    /* font-size: 132px; */
    text-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
  }
`;

export const Line = styled.div`
  width: 8px;
  height: 100%;
  background: ${({ color }) => color ? color : '#7159c1'};
  margin: 0 16px;
  border-radius: 2px;
`;

export const ContainerData = styled.div`
  align-self: flex-end;
  display: flex;

  align-items: center;

  height: 60px;

  div {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    h3, p {
      font-size: 24px;
      text-align: right;
    }
  }

`;