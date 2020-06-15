module.exports = {
  plugins: [
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
      resolve: `gatsby-plugin-mdx`,
      options: {
        defaultLayouts: {
          default: require.resolve("./src/components/default-page-layout.jsx"),
        },
      },
    },
  ],
  siteMetadata: {
    title: `Sergio`,
  },
}
