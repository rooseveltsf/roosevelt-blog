import React from 'react';
import PropsTypes from 'prop-types';

import {
  PostItemLink,
  Container,
  PostItemTag,
  PostItemInfo,
  PostItemDate,
  PostItemTitle,
  PostItemDescription
} from './styles';

const PostItem = ({ slug, tag, date, timeToRead, title, description, color}) => {
  return (
    <PostItemLink to={slug}>
      <Container>
        <PostItemTag color={color}>{tag}</PostItemTag>

        <PostItemInfo>
          <PostItemDate>{date} - {timeToRead} minutos de leitura</PostItemDate>
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