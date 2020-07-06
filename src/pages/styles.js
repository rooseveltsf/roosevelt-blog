import styled from 'styled-components';

export const ContainerTitle = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 32px;

  h2 {
    font-size: 132px;
  }
`;

export const Line = styled.div`
  width: 8px;
  height: 300px;
  background: #3B93FB;
  margin-right: 16px;
`;

export const ContainerData = styled.div`
  align-self: flex-end;
  display: flex;
  /* flex-direction: column; */
  align-items: center;
  /* background: red; */
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

export const LineMid = styled.div`
  width: 8px;
  height: 100%;
  background: #FB3B3B;
  margin-left: 8px;
`;
