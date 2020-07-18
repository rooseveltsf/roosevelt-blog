import styled from 'styled-components';
import media from 'styled-media-query';
import AniLink from "gatsby-plugin-transition-link/AniLink";

export const Container = styled.aside`
  width: 13rem;
  height: 100vh;
  background: var(--backgroundHeader);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 32px;
  border-right: 1px solid var(--borderHeader);
  position: fixed;
  transition: background 0.5s;

  ${media.lessThan('medium')`
    width: 100%;
    height: 5rem;
    position: fixed;
    top: 0;
    flex-direction: row;
    align-items: center;
    border-right: 0;
    border-bottom: 1px solid var(--borderHeader);
  `}

`;

export const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;

  ${media.lessThan('medium')`
    flex-direction: row;
  `}
`;

export const Title = styled.h1`
  font-size: 64px;
  line-height: 0;
  margin-bottom: 100px;
  font-family: Ubuntu;
  color: var(--title);

  ${media.lessThan('medium')`
    margin: 0;
  `}
`

export const Menu = styled.nav`
  ul {
    list-style: none;
    display: flex;
    flex-direction: column;

    li {
      margin-bottom: 24px;
    }
  }

  ${media.lessThan('medium')`
    ul {
      flex-direction: row;
      align-items: center;
      height: 100%;

      li {
        margin: 0 24px;
      }
    }
  `}
`;

export const LinkPage = styled(AniLink).attrs({
  activeStyle: {
    color: '#F2A365',
    fontWeight: 'bold'
  }
})`
  text-decoration: none;
  font-size: 16px;
  color: var(--textLink);
  font-family: Roboto;
`;