import React from 'react';
import PropsTypes from 'prop-types';

import {
  PostItemLink,
  Container,
  PostItemTag,
  PostItemInfo,
  PostItemTitle,
  PostItemDescription
} from './styles';

const PostItem = ({ url, tag, title, description, color}) => {
  return (
    <PostItemLink to={`/${url}`}>
      <Container>
        <PostItemTag color={color}>{tag}</PostItemTag>

        <PostItemInfo>
          <PostItemTitle>{title}</PostItemTitle>
          <PostItemDescription>{description}</PostItemDescription>
        </PostItemInfo>
      </Container>
    </PostItemLink>
  );
}

PostItem.propTypes = {
  url: PropsTypes.string.isRequired,
  tag: PropsTypes.string.isRequired,
  title: PropsTypes.string.isRequired,
  description: PropsTypes.string.isRequired,
  color: PropsTypes.string
}

export default PostItem;