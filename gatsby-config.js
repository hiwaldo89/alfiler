require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Alfiler Branding Studio`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-emotion`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-scroll-reveal`,
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
    {
      resolve: `gatsby-source-prismic`,
      options: {
        repositoryName: `alfiler`,
        accessToken: `${process.env.API_KEY}`,
        linkResolver: ({ node, key, value }) => post =>
          `/proyectos/${post.uid}`,
        shouldDownloadImage: ({ node, key, value }) => {
          return true
        },
        schemas: {
          menu: require(`./src/schemas/menu.json`),
          home: require(`./src/schemas/home.json`),
          projects: require(`./src/schemas/projects.json`),
          studio: require(`./src/schemas/studio.json`),
          servicios: require(`./src/schemas/servicios.json`),
          resenas: require(`./src/schemas/resenas.json`),
          category: require(`./src/schemas/category.json`),
        },
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
