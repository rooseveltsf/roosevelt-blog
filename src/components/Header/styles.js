import styled from 'styled-components';
import { Link } from "gatsby";

export const Container = styled.header`
  width: 190px;
  background: #EEEEEE;


  display: flex;
  flex-direction: column;
  justify-content: space-between;

  padding: 32px;

  &:first-child {
    /* background: red; */
    display: flex;
    flex-direction: column;
    flex: 1;
  }

  /* div {

  } */
`;

export const Title = styled.h1`
  font-size: 64px;
  margin-bottom: 100px;
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
    color: '#575656',
    fontWeight: 'bold'
  }
})`
  text-decoration: none;
  font-size: 16px;
  color: #707070;
`;