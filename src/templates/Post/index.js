import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../../components/Layout';

const Post = ({ data }) => {
  const { frontmatter: { title }, html} = data.markdownRemark

  return (
    <Layout title={title}>
      <h1>{title}</h1>
      <div dangerouslySetInnerHTML={{__html: html}}></div>
    </Layout>
  )
}

export const query = graphql`
  query Post($slug: String!) {
    markdownRemark(fields: {slug: {eq: $slug}}) {
      frontmatter {
        title
      }
      html
    }
  }
`
export default Post;