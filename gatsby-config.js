module.exports = {
  plugins: [
    `gatsby-plugin-sharp`,
    `gatsby-remark-images`,
    {
      resolve: `gatsby-theme-notes`,
      options: {
        mdxOtherwiseConfigured: true,
        basePath: `/notes`,
      },
    },
    // with gatsby-plugin-theme-ui, the last theme in the config
    // will override the theme-ui context from other themes
    { resolve: `gatsby-theme-blog`,
      options: {
        mdxOtherwiseConfigured: true,
        basePath: `/blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/img`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        defaultLayouts: {
          default: require.resolve("./src/components/default-page-layout.jsx"),
        },
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200,
            },
          },
        ],
      },
    },
  ],
  siteMetadata: {
    title: `Sergio`,
  },
}
