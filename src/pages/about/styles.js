import styled from 'styled-components';
import media from 'styled-media-query';

export const Line = styled.div`
  height: 1px;
  width: 100%;
  background: linear-gradient(to right, var(--border), var(--background));
  margin-top: 8px;
`;

export const Container = styled.section`
  display: grid;
  margin: 0 1.8rem;
  color: var(--text);
  height: 100%;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr 1fr;
  grid-template-areas: 
    'info contact'
    'tech tech';

  ${media.lessThan('medium')`
    margin: 0 1rem;
    grid-template-rows: repeat(3, minmax(100px, auto));
    grid-template-columns: 1fr;
    grid-template-areas: 
      'info'
      'tech'
      'contact';
  `}
`;

export const InfoContainer = styled.div`
  grid-area: info;

  div:nth-child(2) {
    margin-left: 16px;

    p {
      font-weight: 500;
      margin: 10px 0;
      font-size: 16px;

      span {
        font-weight: bold;
      }
    }

    ${media.lessThan('medium')`
      margin: 0;
    `}
  }

  h3 {
    font-size: 2rem;
    font-weight: bold;
    color: var(--text);
    margin-top: 32px;
  }

  ${media.lessThan('medium')`
    width: 100%;
  `}
`;

export const Info = styled.div`
  display: flex;
  /* flex-direction: column; */
  /* align-items: center; */
  width: 100%;

  ${media.lessThan('medium')`
    flex-direction: column;
  `}
`;

export const ContainerImg = styled.div`
  width: 10rem;
  align-self: center;
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

export const TechsContainer = styled.ul`
  grid-area: tech;

  display: flex;
  flex-wrap: wrap;

  h3 {
    font-size: 2rem;
    font-weight: bold;
    color: var(--text);
    margin-top: 32px;
  }

  li {
    margin: 16px 0;
    width: 50%;
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

  ${media.lessThan('medium')`
    flex-direction: column;
    flex-wrap: nowrap;

    li {
      width: 100%;
    }
  `}
`;

export const ContactsContainer = styled.div`
  grid-area: contact;

  padding-left: 2rem;

  h3 {
    font-size: 2rem;
    margin-top: 32px;
    margin-bottom: 8px;
  }

  ${media.lessThan('medium')`
    width: 100%;
    padding: 0;
  `}

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

  ${media.lessThan('medium')`
    flex-direction: row;
    flex-wrap: wrap;

    a {
      width: 50%;
      /* margin: 8px 0;
      font-size: 1.1rem; */
    }
  `}
`;