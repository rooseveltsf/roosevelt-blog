import React from "react"
import { StaticQuery, graphql } from "gatsby";

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <StaticQuery query={
      graphql`
        query MyQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={data => (
        <h1>{data.site.siteMetadata.title}</h1>
      )}
    />
    <SEO title="Home" />
  </Layout>
)

export default IndexPage
