import React from 'react';
import { graphql } from 'gatsby';

import { PostHeader, PostHeaderBorder, PostDate, PostTitle, PostDescription, MainContent } from "../../components/Post/styles";
import Layout from '../../components/Layout';
import RecommendedPosts from '../../components/RecommendedPosts'

const Post = ({ data, pageContext }) => {
  const { frontmatter: { title, description, date, background, image }, html, timeToRead} = data.markdownRemark

  const { previousPost, nextPost } = pageContext;
  return (
    <Layout title={title} description={description} image={image} >
      <PostHeader>
        <PostDate>{date} • ⏱ {timeToRead} min de leitura</PostDate>
        <PostTitle>{title}</PostTitle>
        <PostDescription>{description}</PostDescription>
        <PostHeaderBorder color={background} />
      </PostHeader>
      <MainContent>
        <div dangerouslySetInnerHTML={{__html: html}}></div>
      </MainContent>
      <RecommendedPosts color={background} next={nextPost} previous={previousPost} />
    </Layout>
  )
}

export const query = graphql`
  query Post($slug: String!) {
    markdownRemark(fields: {slug: {eq: $slug}}) {
      frontmatter {
        title
        description
        date (formatString: "DD [de] MMMM [de] YYYY", locale: "pt-br")
        background
        image
      }
      html
      timeToRead
    }
  }
`
export default Post;