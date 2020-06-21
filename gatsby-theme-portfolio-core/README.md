A Gatsby theme for creating a portfolio child theme. It includes all of the data structures you need to get up and running building a blog and includes no additional theming or style opinions.

## Installation

### For an existing site

1. Install the theme

```shell
npm install @scot3004/gatsby-theme-portfolio-core
```

2. Add the configuration to your `gatsby-config.js` file

```js
// gatsby-config.js
module.exports = {
  plugins: [
    {
      resolve: `gatsby-theme-portfolio-core`,
      options: {
        // basePath defaults to `/`
        basePath: `/portfolio`,
      },
    },
  ],
}
```

3. Add portfolio posts to your site by creating `md` or `mdx` files inside `/content/portfolio`.

   > Note that if you've changed the default `contentPath` in the configuration, you'll want to add your markdown files in the directory specified by that path.

4. Run your site using `gatsby develop` and navigate to your portfolio posts. If you used the above configuration, your URL will be `http://localhost:8000/portfolio`

## Usage

### Theme options

| Key                      | Default value       | Description                                                                      |
| ------------------------ | ------------------- | -------------------------------------------------------------------------------- |
| `basePath`               | `/`                 | Root url for all blog posts                                                      |
| `contentPath`            | `content/portfolio` | Location of blog posts                                                           |
| `assetPath`              | `content/assets`    | Location of assets                                                               |
| `mdxOtherwiseConfigured` | `false`             | Set this flag `true` if `gatsby-plugin-mdx` is already configured for your site. |
| `excerptLength`          | `140`               | Length of the auto-generated excerpt of a blog post                              |

#### Example usage

```js
// gatsby-config.js
module.exports = {
  plugins: [
    {
      resolve: `gatsby-theme-portfolio-core`,
      options: {
        // basePath defaults to `/`
        basePath: `/portfolio`,
      },
    },
  ],
}
```

### Additional configuration

In addition to the theme options, there are a handful of items you can customize via the `siteMetadata` object in your site's `gatsby-config.js`

```js
// gatsby-config.js
module.exports = {
  siteMetadata: {
    // Used for the site title and SEO
    title: `My Portfolio Title`,
    // Used to provide alt text for your avatar
    author: `My Name`,
    // Used for SEO
    description: `My site description...`,
    // Used for social links in the root footer
    siteUrl: `https://example.com`,
    // Used for resolving images in social cards
    social: [
      {
        name: `Twitter`,
        url: `https://twitter.com/gatsbyjs`,
      },
      {
        name: `GitHub`,
        url: `https://github.com/gatsbyjs`,
      },
    ],
  },
}
```

### Blog Post Fields

The following are the defined portfolio post fields based on the node interface in the schema

| Field            | Type                   |
| ---------------- | ---------------------- |
| id               | String                 |
| title            | String                 |
| body             | String                 |
| slug             | String                 |
| tags             | String[]               |
| keywords         | String[]               |
| excerpt          | String                 |
| image            | String                 |
| imageAlt         | String                 |
| socialImage      | String                 |
| role             | String                 |
| responsibilities | String                 |
| gallery          | PortfolioGalleryItem[] |

### PortfolioGalleryItem

| Field | Type   |
| ----- | ------ |
| alt   | String |
| image | String |
