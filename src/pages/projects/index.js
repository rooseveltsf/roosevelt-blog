import React from 'react';
import PropsTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby'

import Layout from '../../components/Layout';
import Line from '../../components/Line';

import { Apresentation, ListPost } from './styles';
import PostItem from '../../components/PostItem';

const colors = [
  '#F7FB3B',
  '#A73BFB',
  '#FB3BE8',
  '#3BFB5A',
  '#3BFBD8',
  '#3B93FB',
  '#C9FB3B',
  '#FB3B3B',
  
]

const ProjectsPage = () => {
  const {allMarkdownRemark: { edges }} = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
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
  `)
  return (
    <Layout title="Projetos">
      <Apresentation>
        <Line color='#A73BFB' />
        <div>
          <h3>Projetos</h3>
          <p>Segue a lista de alguns projetos idealizado por mim,<br/>
          com detalhes sobre eles.</p>
        </div>
      </Apresentation>
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
    </Layout>
  );
}
export default ProjectsPage;