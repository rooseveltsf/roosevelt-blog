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
`;

export const Container = styled.section`
  /* height: 100%; */
  display: flex;
  justify-content: space-between;
  margin: 0 1.8rem;
  /* background: darkmagenta; */
  color: var(--text);
  height: 100%;
`;

export const SubContainer = styled.div`
  width: 55%;

  h3 {
    font-size: 2rem;
    font-weight: bold;
    color: var(--text);
    margin-top: 32px;
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

export const ContainerImg = styled.div`
  width: 10rem;
`;

export const Forms = styled.div`
  margin-left: 16px;

  p {
    font-weight: 500;
    margin: 10px 0;
    font-size: 16px;

    span {
      font-weight: bold;
    }
  }
`;

export const Formation = styled.div`
  margin-top: 24px;

  p {
    margin: 10px 0;

    span {
      font-weight: bold;
    }
  }
`;

export const Techs = styled.ul`
  display: flex;
  margin: 0 1.8rem;

  li {
    margin: 16px 0;
    /* background: red; */

    strong {
      font-weight: bold;
      font-size: 1.4rem;
      
    }
    p {
      margin-top: 8px;
      font-size: 16px;
      font-weight: 300;
      width: 90%;
    }
  }
`;

export const ContactContainer = styled.div`
  /* background: blue; */
  width: 45%;
  padding-left: 2rem;

  h3 {
    font-size: 2rem;
    margin-top: 32px;
    margin-bottom: 8px;
  }

`;

export const Contact = styled.div`
  margin-top: 16px;

  p {
    font-size: 1rem;
    margin: 8px 0;

    span {
      font-weight: bold;
    }
  }
`;
export const Socials = styled.div`
  display: flex;
  flex-direction: column;

  a {
    text-decoration: none;
    color: var(--text);
    margin: 8px 0;
    font-size: 1.1rem;
  }
`;