import styled from 'styled-components';
import { Link } from "gatsby";

export const PostItemLink = styled(Link)`
  text-decoration: none;
  display: flex;
  cursor: pointer;

  &:hover {
    box-shadow: 0 1px 6px rgba(0, 0, 0, 0.16);
    background: #D1CCCC;
  }
`;

export const Container = styled.section`
  display: flex;
  align-items: center;
  border-top: 1px solid #D1CCCC;
  /* border-bottom: 1px solid #D1CCCC; */
  width: 100%;
  padding: 2rem 3rem;
`;

export const PostItemTag = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ color }) => color ? color : 'black'};
  border-radius: 50%;
  color: #fff;
  font-size: 1.3rem;
  font-weight: bold;
  min-height: 90px;
  min-width: 90px;
  text-transform: uppercase;
`;

export const PostItemInfo = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  margin-left: 1.5rem;
`;

export const PostItemDate = styled.p`
  font-size: 0.8rem;
  color: #575656;
`;

export const PostItemTitle = styled.h2`
  font-size: 1.6rem;
  font-weight: bold;
  margin: 0.2rem 0 0.5rem;
  color: #3B3B3B;
`;

export const PostItemDescription = styled.p`
  font-size: 1.2rem;
  font-weight: 400;
  line-height: 1.2;
  color: #575656;
`;

