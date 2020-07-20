import styled from 'styled-components';
import media from 'styled-media-query';

export const Container = styled.div`
  width: 4rem;
  height: 100vh;
  position: fixed;
  right: 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-left: 1px solid var(--borderHeader);
  background: var(--backgroundHeader);
  transition: background 0.5s;

  ul {
    list-style: none;
    display: flex;
    flex-direction: column;

    li {
      margin: 54px 0;
      writing-mode: vertical-rl;
 
      a {
        text-decoration: none;
        color: var(--textLink);
        font-size: 16px;
      }
    }
  }

  ${media.lessThan('medium')`
    width: 100%;
    height: 4rem;
    position: fixed;
    bottom: 0;

    ul {
      flex-direction: row;
      justify-content: space-around;
      /* background: darkblue; */
      width: 100%;

      li {
        writing-mode: horizontal-tb;
        /* margin: 0 54px; */
      }
    }
  `}

  ${media.lessThan('small')`
    min-width: 360px;
  `}
`;
