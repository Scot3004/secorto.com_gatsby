<p align="center">
  <a href="https://www.gatsbyjs.org">
    <img alt="Gatsby" src="https://www.gatsbyjs.org/monogram.svg" width="60" />
  </a>
</p>
<h1 align="center">
  Workspace of secorto.com website and theme
</h1>

## Layout

```text
.
├── README.md
├── gatsby-theme-portfolio-core
│   ├── README.md
│   ├── gatsby-config.js
│   ├── index.js
│   └── package.json
├── gatsby-theme-secorto
│   ├── README.md
│   ├── gatsby-config.js
│   ├── index.js
│   └── package.json
├── example
│   ├── content
│   ├── README.md
│   ├── gatsby-config.js
│   ├── package.json
│   └── src
├── website
│   ├── content
│   ├── README.md
│   ├── gatsby-config.js
│   ├── package.json
│   └── src
├── package.json
└── yarn.lock

3 directories, 10 files
```

### `gatsby-theme-portfolio-core`

This directory contains the data models for the portfolio of gatsby-theme-secorto
for details about how to use it please read the [readme](gatsby-theme-portfolio-core/README.md)


### `gatsby-theme-secorto`

This directory contains the main theme that is used by the example and my website you can read the instructions in the [readme file](gatsby-theme-secorto/README.md), please consider to see example

### `example`

This is an example usage of `gatsby-theme-secorto` theme. It should look the same as the
site of someone who installed and used your theme from npm.

- `example/`
  - `gatsby-config.js`: Specifies which theme to use and any other one-off config a site might need.
  - `src/`: Source code such as one-off pages or components that might live in
    a user's site.

You can run the example with:

```shell
yarn workspace @scot3004/gatsby-theme-secorto-example develop
```

### `website`

This is the implementation of my website

You can run a local instance of my website with:

```shell
yarn workspace @scot3004/website develop
```
