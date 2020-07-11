const { createFilePath } = require(`gatsby-source-filesystem`);
const path = require('path');

// Adiciona o campo slug(url) a cada um dos posts
exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  // Ensures we are processing only markdown files
  if (node.internal.type === "MarkdownRemark") {
    // Use `createFilePath` to turn markdown files in our `data/faqs` directory into `/faqs/slug`
    const slug = createFilePath({
      node,
      getNode,
      basePath: "pages",
    })

    // Creates new query'able field with name of 'slug'
    createNodeField({
      node,
      name: "slug",
      value: `/${slug.slice(12)}`,
    })
  }
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  const blogPostTemplate = path.resolve(`src/templates/BlogPost/index.js`);
  const blogListTemplate = path.resolve(`src/templates/BlogList/index.js`);

  return graphql(`
    {
      allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}) {
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
          next {
            frontmatter {
              title
            }
            fields {
              slug
            }
          }
          previous {
            frontmatter {
              title
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      throw result.errors
    }
    const posts = result.data.allMarkdownRemark.edges

    posts.forEach(({ node, next, previous }) => {
      createPage({
        path: node.fields.slug,
        component: blogPostTemplate,
        context: {
          slug: node.fields.slug,
          previousPost: next,
          nextPost: previous

        }
      })
    })

    const postsPerPage = 6
    const numPages = Math.ceil(posts.length / postsPerPage)

    Array.from({ length: numPages }).forEach((_, index) => {
      createPage({
        path: index === 0 ? `/projects/` : `/projects/page/${index + 1}`,
        component: blogListTemplate,
        context: {
          limit: postsPerPage,
          skip: index * postsPerPage,
          numPages,
          currentPage: index + 1
        }
      })
    })
  })
}