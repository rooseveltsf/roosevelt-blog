import styled from 'styled-components';

export const Container = styled.div`
  align-self: flex-end;
  display: flex;

  margin: 32px 0;
`;

export const TechContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: right;

  h3 {
    font-size: 36px;
    margin-bottom: 24px;
  }

  ul {
    list-style: none;

    li {
      font-size: 16px;
      color: #575656;
      font-family: Roboto;
      margin-bottom: 8px;
    }
  }
`;
