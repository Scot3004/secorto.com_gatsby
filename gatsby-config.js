module.exports = {
  plugins: [
    `gatsby-plugin-sharp`,
    `gatsby-remark-images`,
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
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "SeCOrTo",
        short_name: "GatsbyJS",
        start_url: "/",
        background_color: "#699ea0",
        theme_color: "#699ea0",
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: "standalone",
        icon: "content/img/logo.png", // This path is relative to the root of the site.
        // An optional attribute which provides support for CORS check.
        // If you do not provide a crossOrigin option, it will skip CORS for manifest.
        // Any invalid keyword or empty string defaults to `anonymous`
        crossOrigin: `use-credentials`,
      },
    },
  ],
  siteMetadata: {
    title: `SeCOrTo`,
    // Used to provide alt text for your avatar
    author: `Sergio Orozco Torres`,
    // Used for SEO
    description: `Sitio web de Sergio Orozco`,
    // Used for social links in the root footer
    siteUrl: `https://www.secorto.com`,
    // Used for resolving images in social cards
    social: [
      {
        name: `Twitter`,
        url: `https://twitter.com/scot3004`,
      },
      {
        name: `GitHub`,
        url: `https://github.com/scot3004`,
      }
    ]
  },
}
