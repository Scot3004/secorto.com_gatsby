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
        name: 'SeCOrTo',
        short_name: 'SeCOrTo',
        start_url: '/',
        background_color: '#004f53',
        // theme_color: '#004f53',
        // Enables "Add to HomeScreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: 'standalone',
        icon: 'content/img/logo.png', // This path is relative to the root of the site.
        // An optional attribute which provides support for CORS check.
        // If you do not provide a crossOrigin option, it will skip CORS for manifest.
        // Any invalid keyword or empty string defaults to `anonymous`
        crossOrigin: `use-credentials`,
        theme_color_in_head: false,
        shortcuts: [
          {
            name: "Blog",
            url: "/blog",
            description: "Blog Posts"
          },
          {
            name: "Portafolio",
            url: "/portafolio",
            description: "Posts del portafolio"
          }
        ]
      },
    },
    {
      resolve: `@scot3004/gatsby-theme-secorto`,
      options: {
        portfolio: {
          basePath: `/portafolio`,
        },
        webfontURL:
          'https://fonts.googleapis.com/css2?family=Alegreya+Sans:ital,wght@0,100;0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap',
      },
    },
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        precachePages: [`/portafolio/*`, `/blog/*`],
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
      },
      {
        name: "LinkedIn",
        url: `https://linkedin.com/in/scot3004`,
      }
    ],
    menuLinks: [
      {
        name: 'Blog',
        link: '/blog',
      },
      {
        name: 'Portafolio',
        link: '/portafolio',
      },
    ],
  },
}
