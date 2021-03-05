module.exports = {
  siteMetadata: {
    title: `Ryan Jennings Peterson`,
    description: `The ongoing portfolio of Ryan Peterson, Front End Dev, WordPress Engineer, and author of The Humanities Saga.`,
    author: `RJP`,
  },
  plugins: [
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
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    `gatsby-plugin-less`,
    {
      resolve: `gatsby-plugin-web-font-loader`,
      options: {
        google: {
          families: [
            `Arya:400,700`,
            `Anonymous Pro:400`,
          ],
        },
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `fe21ql66hzkf`,
        accessToken: `-piBFJpW3V4fEgH7zP8-WhYAoRnBoRn5QrXDUnaWEd8`,
      },
    },
  ],
}
