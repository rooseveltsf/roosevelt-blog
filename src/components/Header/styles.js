import styled from 'styled-components';
import { Link } from "gatsby";

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

  &:first-child {
    /* background: red; */
    display: flex;
    flex-direction: column;
    flex: 1;
  }

`;

export const Title = styled.h1`
  font-size: 64px;
  margin-bottom: 100px;
  font-family: Ubuntu;
  color: var(--title);
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
`;

export const LinkPage = styled(Link).attrs({
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