import React, { useContext } from 'react';
import PropsTypes from 'prop-types';
import { StateContext } from "../../context/StateContext";

import {
  PostItemLink,
  Container,
  PostItemTag,
  PostItemInfo,
  PostItemDate,
  PostItemTitle,
  PostItemDescription
} from './styles';

const PostItem = ({ slug, tag, date, timeToRead, title, description, color }) => {
  const { dark } = useContext(StateContext);

  const isDark = dark ? '#1b2027' : '#f7f7f7';

  return (
    <PostItemLink to={slug} cover direction="left" bg={isDark} duration={1}>
      <Container>
        <PostItemTag color={color}>{tag}</PostItemTag>

        <PostItemInfo>
          <PostItemDate>{date} • ⏱ {timeToRead} minutos de leitura</PostItemDate>
          <PostItemTitle>{title}</PostItemTitle>
          <PostItemDescription>{description}</PostItemDescription>
        </PostItemInfo>
      </Container>
    </PostItemLink>
  );
}

PostItem.propTypes = {
  slug: PropsTypes.string.isRequired,
  tag: PropsTypes.string.isRequired,
  date: PropsTypes.string.isRequired,
  timeToRead: PropsTypes.number.isRequired,
  title: PropsTypes.string.isRequired,
  description: PropsTypes.string.isRequired,
  color: PropsTypes.string
}

export default PostItem;