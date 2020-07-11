import styled from 'styled-components';

export const Container = styled.div`
  align-self: center;
  display: flex;
  width: 45vw;
  /* background:red; */
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 24px;
  width: 60%;

  h2 {
    font-size: 36px;
    margin-bottom: 32px;
    font-weight: bold;
  }

  p {
    font-size: 16px;
    color: #575656;
    text-align: justify;
    font-family: Roboto;
  }
`;

export const AvatarContainer = styled.div`
  width: 32%;
`;