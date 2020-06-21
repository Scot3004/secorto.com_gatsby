module.exports = options => {
  let {disableThemeUiStyling = false} = options
  let {portfolio = {
    basePath: '/portfolio'
  } } = options
  let {blog = {
    basePath: '/blog'
  } } = options

  portfolio.mdxOtherwiseConfigured = true
  blog.mdxOtherwiseConfigured = true

  return {
    plugins: [
      `gatsby-plugin-sharp`,
      `gatsby-remark-images`,
      // with gatsby-plugin-theme-ui, the last theme in the config
      // will override the theme-ui context from other themes
      { resolve: `gatsby-theme-blog-core`,
        options: blog,
      },
      {
        resolve: `gatsby-plugin-mdx`,
        options: {
          extensions: [`.mdx`, `.md`],
          defaultLayouts: {
            default: require.resolve("./src/components/default-page-layout.jsx"),
          },
          gatsbyRemarkPlugins: [
            {
              resolve: `gatsby-remark-images`,
              options: {
                // should this be configurable by the end-user?
                maxWidth: 1380,
                linkImagesToOriginal: false,
              },
            },
            { resolve: `gatsby-remark-copy-linked-files` },
            { resolve: `gatsby-remark-smartypants` },
          ],
          remarkPlugins: [require(`remark-slug`)],
        },
      },
      {
        resolve: `@scot3004/gatsby-theme-portfolio-core`,
        options: portfolio,
      },
      `gatsby-plugin-react-helmet`,
      `gatsby-plugin-twitter`,
      `gatsby-plugin-emotion`,
      !disableThemeUiStyling && {
        resolve: `gatsby-plugin-theme-ui`,
      }
    ].filter(Boolean)
  }
}
