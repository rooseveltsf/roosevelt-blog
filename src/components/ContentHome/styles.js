import styled from 'styled-components';
import media from 'styled-media-query';

export const Container = styled.div`
  padding: 32px;
  flex: 1;

  display: flex;
  flex-direction: column;
  justify-content: center;

  transition: background 0.5s;

  ${media.lessThan('small')`
    padding: 32px 0;
  `}
`;

export const ContainerTitle = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 54px;
  height: 18rem;
  word-break: break-word;

  h2 {
    font-size: 9rem;
    color: var(--title);
    
    text-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
  }

  ${media.lessThan('large')`
    height: 11rem;

    h2 {
      font-size: 6rem;
    }
  `}

  ${media.lessThan('medium')`
    height: 10rem;

    h2 {
      font-size: 5rem;
    }
  `}

  ${media.lessThan('small')`
    height: 7.5rem;

    h2 {
      font-size: 4rem;
    }
  `}
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

    h3 {
      font-size: 24px;
      text-align: right;
    }

    p {
      font-family: Roboto;
      text-align: right;
      font-size: 16px;
      color: var(--text);
    }
  }
  ${media.lessThan('small')`
    height: 3.250rem;
    
    div{
      height: 100%;

      h3 {
        font-size: 1.5rem;
      }

      p {
        font-size: 1.2rem;
      }
    }
  `}
`;