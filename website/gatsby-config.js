module.exports = {
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/img`,
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
        // Enables "Add to HomeScreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: "standalone",
        icon: "content/img/logo.png", // This path is relative to the root of the site.
        // An optional attribute which provides support for CORS check.
        // If you do not provide a crossOrigin option, it will skip CORS for manifest.
        // Any invalid keyword or empty string defaults to `anonymous`
        crossOrigin: `use-credentials`,
      },
    },
    { resolve: `@scot3004/gatsby-theme-secorto`, 
      options: {
        portfolio: {
          basePath: `/portafolio`,
        }
      },
    }
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
    ],
    menuLinks: [
      {
        name: "Blog",
        link: "/blog"
      },
      {
        name: "Portafolio",
        link: "/portafolio"
      }
    ]
  },
}
