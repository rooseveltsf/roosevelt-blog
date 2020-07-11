import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../../components/Layout';
import data from './dataPageProjects';

import Apresentation from "../../components/Apresentation";
import PostItem from '../../components/PostItem';
import Pagination from '../../components/Pagination';

const BlogPage = props => {

  const { edges } = props.data.allMarkdownRemark
  const { numPages, currentPage } = props.pageContext

  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const prevPage = currentPage - 1 === 1 ? '/projects/' : `/projects/page/${currentPage - 1}`
  const nextPage = `/projects/page/${currentPage + 1}`

  return (
    <Layout title='Projetos'>
      <Apresentation
        left
        color={data.color}
        description={data.description}
        title={data.title}
      />
      {edges.map(post => (
        <PostItem
          key={post.node.frontmatter.title}
          color={post.node.frontmatter.background}
          date={post.node.frontmatter.date}
          timeToRead={post.node.timeToRead}
          title={post.node.frontmatter.title}
          description={post.node.frontmatter.description}
          tag={post.node.frontmatter.tag}
          slug={post.node.fields.slug}
        />
      ))}
      <Pagination
        isFirst={isFirst}
        isLast={isLast}
        prevPage={prevPage}
        nextPage={nextPage}
        currentPage={currentPage}
        numPages={numPages}
      />
    </Layout>
  )
}

export const PageQuery = graphql`
  query PostList($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: {fields: frontmatter___date, order: DESC},
      limit: $limit,
      skip: $skip
      ) {
      edges {
        node {
          frontmatter {
            background
            date(formatString: "DD [de] MMMM [de] YYYY", locale: "pt-br")
            description
            tag
            title
          }
          timeToRead
          fields {
            slug
          }
        }
      }
    }
  }
`
export default BlogPage;