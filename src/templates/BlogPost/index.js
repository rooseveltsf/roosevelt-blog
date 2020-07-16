import React from 'react';
import { graphql } from 'gatsby';

import { PostHeader, PostHeaderBorder, PostDate, PostTitle, PostDescription, MainContent } from "../../components/Post/styles";
import Layout from '../../components/Layout';
import RecommendedPosts from '../../components/RecommendedPosts'
import Footer from '../../components/Footer';

const Post = ({ data, pageContext }) => {
  const { frontmatter: { title, description, date, background }, html, timeToRead} = data.markdownRemark

  const { previousPost, nextPost } = pageContext;
  return (
    <Layout title={title}>
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
      {/* <Footer /> */}
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
      }
      html
      timeToRead
    }
  }
`
export default Post;