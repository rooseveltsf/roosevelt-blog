import styled from 'styled-components';
import media from 'styled-media-query';

export const Container = styled.section`
  display: flex;
  min-height: 100vh;
  min-width: 360px;

  ${media.lessThan("large")`
    flex-direction: column;
  `}
`;

export const Main = styled.main`
  width: 100%;
  padding: 0 4rem 0 13rem;

  display: flex;
  flex-direction: column;
  flex: 1;

  ${media.lessThan("large")`
    padding: 5rem 0 4rem 0;
    /* background: purple; */
  `}
`