module.exports = {
  siteMetadata: {
    title: `Meu Portfólio`,
    position: `Desenvolvedor full-stack`,
    description: `O portfolio de um desenvolvedor full-stack`,
    author: `Roosevelt de Souza`,
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Meu-Portfólio`,
        short_name: `portfolio`,
        start_url: `/`,
        background_color: `#3B3B3B`,
        theme_color: `#3B93FB`,
        display: `minimal-ui`,
        icon: `src/images/Icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-page-creator`,
      options: {
        path: `${__dirname}/src/pages`,
        ignore: [`**/styles.js`],
      },
    },
    // `gatsby-plugin-offline`,
  ],
}
