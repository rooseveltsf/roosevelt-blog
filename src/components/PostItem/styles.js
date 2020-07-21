import styled from 'styled-components';
import media from "styled-media-query";
import AniLink from "gatsby-plugin-transition-link/AniLink";

export const PostItemLink = styled(AniLink)`
  text-decoration: none;
  display: flex;
  cursor: pointer;

  &:hover {
    box-shadow: 0 1px 6px rgba(0, 0, 0, 0.16);
  }
`;

export const Container = styled.section`
  display: flex;
  align-items: center;
  border-bottom: 1px solid var(--border);
  width: 100%;
  padding: 2rem 3rem;
  font-family: Roboto;

  ${media.lessThan("large")`
    align-items: flex-start;
    flex-direction: column;
    padding: 2rem 1rem;
  `}
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

  ${media.lessThan("large")`
    border-radius: 0;
    font-size: 1rem;
    min-height: auto;
    min-width: auto;
    padding: .2rem .5rem;
    margin-bottom: .7rem;
  `}
`;

export const PostItemInfo = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  margin-left: 1.5rem;

  ${media.lessThan("large")`
    margin: 0;
  `}
`;

export const PostItemDate = styled.p`
  font-size: 0.8rem;
  color: var(--text);
`;

export const PostItemTitle = styled.h2`
  font-size: 1.6rem;
  font-weight: bold;
  margin: 0.2rem 0 0.5rem;
  color: var(--title);
`;

export const PostItemDescription = styled.p`
  font-size: 1.2rem;
  font-weight: 400;
  line-height: 1.2;
  color: var(--text);
`;

