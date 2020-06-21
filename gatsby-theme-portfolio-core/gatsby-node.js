const fs = require(`fs`)
const path = require(`path`)
const mkdirp = require(`mkdirp`)
const Debug = require(`debug`)
const { createFilePath, createRemoteFileNode } = require(`gatsby-source-filesystem`)
const { urlResolve, createContentDigest, slash } = require(`gatsby-core-utils`)

const debug = Debug(`@scot3004/gatsby-theme-portfolio-core`)
const withDefaults = require(`./utils/default-options`)


// Ensure that content directories exist at site-level
exports.onPreBootstrap = ({ store }, themeOptions) => {
  const { program } = store.getState()
  const { contentPath, assetPath } = withDefaults(themeOptions)

  const dirs = [
    path.join(program.directory, contentPath),
    path.join(program.directory, assetPath),
  ]

  dirs.forEach(dir => {
    debug(`Initializing ${dir} directory`)
    if (!fs.existsSync(dir)) {
      mkdirp.sync(dir)
    }
  })
}

const mdxResolverPassthrough = fieldName => async (
  source,
  args,
  context,
  info
) => {
  const type = info.schema.getType(`Mdx`)
  const mdxNode = context.nodeModel.getNodeById({
    id: source.parent,
  })
  const resolver = type.getFields()[fieldName].resolve
  const result = await resolver(mdxNode, args, context, {
    fieldName,
  })
  return result
}

exports.createSchemaCustomization = ({ actions, schema }, themeOptions) => {
  const {excerptLength} = withDefaults(themeOptions)
  const { createTypes } = actions

  createTypes(`type PortfolioGalleryItem implements Node {
      image: File
      alt: String
  }`)

  createTypes(`interface PortfolioPost @nodeInterface {
      id: ID!
      title: String!
      body: String!
      slug: String!
      tags: [String]!
      keywords: [String]!
      excerpt: String!
      image: File
      imageAlt: String
      socialImage: File
      responsibilities: String!
      role: String!
      gallery: [PortfolioGalleryItem]
  }`)

  createTypes(
    schema.buildObjectType({
      name: `MdxPortfolioPost`,
      fields: {
        id: { type: `ID!` },
        title: {
          type: `String!`,
        },
        slug: {
          type: `String!`,
        },
        tags: { type: `[String]!` },
        keywords: { type: `[String]!` },
        excerpt: {
          type: `String!`,
          args: {
            pruneLength: {
              type: `Int`,
              defaultValue: excerptLength,
            },
          },
          resolve: mdxResolverPassthrough(`excerpt`),
        },
        image: {
          type: `File`,
          resolve: async (source, args, context, info) => {
            if (source.image___NODE) {
              return context.nodeModel.getNodeById({ id: source.image___NODE })
            } else if (source.image) {
              return processRelativeImage(source, context, source["image"])
            }
          },
        },
        imageAlt: {
          type: `String`,
        },
        socialImage: {
          type: 'File',
          resolve: async (source, args, context, info) => {
            if (source.socialImage___NODE) {
              return context.nodeModel.getNodeById({ id: source.socialImage___NODE })
            } else if (source.socialImage) {
              return processRelativeImage(source, context, source["socialImage"])
            }
          },
        },
        body: {
          type: `String!`,
          resolve: mdxResolverPassthrough(`body`),
        },
        responsibilities: { type: `String!` },
        role: { type: `String!` },
        gallery: {
          type: `[PortfolioGalleryItem]`,
          resolve: async (source, args, context, info) => {
            return source.gallery.map((item) => {
              return {
                alt: item.alt,
                image: processRelativeImage(source, context, item.image)
              }
            })
          },
        },
      },
      interfaces: [`Node`, `PortfolioPost`],
      extensions: {
        infer: false,
      }
    })
  )
}

function processRelativeImage(source, context, strPath) {
  // Image is a relative path - find a corresponding file
  const mdxFileNode = context.nodeModel.findRootNodeAncestor(
    source,
    node => node.internal && node.internal.type === `File`
  )
  if (!mdxFileNode) {
    return
  }
  const imagePath = slash(
    path.join(mdxFileNode.dir, strPath)
  )

  const fileNodes = context.nodeModel.getAllNodes({ type: `File` })
  for (let file of fileNodes) {
    if (file.absolutePath === imagePath) {
      return file
    }
  }
}

function validURL(str) {
  try {
    new URL(str)
    return true
  } catch {
    return false
  }
}

// Create fields for post slugs and source
// This will change with schema customization with work
exports.onCreateNode = async (
  { node, actions, getNode, createNodeId,
    store,
    cache},
  themeOptions
) => {
  const { createNode, createParentChildLink } = actions
  const { contentPath, basePath } = withDefaults(themeOptions)

  // Make sure it's an MDX node
  if (node.internal.type !== `Mdx`) {
    return
  }

  // Create source field (according to contentPath)
  const fileNode = getNode(node.parent)
  const source = fileNode.sourceInstanceName

  if (node.internal.type === `Mdx` && source === contentPath) {
    let slug
    if (node.frontmatter.slug) {
      if (path.isAbsolute(node.frontmatter.slug)) {
        // absolute paths take precedence
        slug = node.frontmatter.slug
      } else {
        // otherwise a relative slug gets turned into a sub path
        slug = urlResolve(basePath, node.frontmatter.slug)
      }
    } else {
      // otherwise use the filepath function from gatsby-source-filesystem
      const filePath = createFilePath({
        node: fileNode,
        getNode,
        basePath: contentPath,
      })

      slug = urlResolve(basePath, filePath)
    }
    // normalize use of trailing slash
    slug = slug.replace(/\/*$/, `/`)
    const fieldData = {
      title: node.frontmatter.title,
      tags: node.frontmatter.tags || [],
      slug,
      date: node.frontmatter.date,
      keywords: node.frontmatter.keywords || [],
      image: node.frontmatter.image,
      socialImage: node.frontmatter.socialImage,
      role: node.frontmatter.role,
      responsibilities: node.frontmatter.responsibilities,
      gallery: node.frontmatter.gallery
    }

    if (validURL(node.frontmatter.image)) { // create a file node for image URLs
      const remoteFileNode = await createRemoteFileNode({
        url: node.frontmatter.image,
        parentNodeId: node.id,
        createNode,
        createNodeId,
        cache,
        store
      })
      // if the file was created, attach the new node to the parent node
      if (remoteFileNode) {
        fieldData.image___NODE = remoteFileNode.id
      }
    } 

    if (validURL(node.frontmatter.socialImage)) { // create a file node for image URLs
      const remoteFileNode = await createRemoteFileNode({
        url: node.frontmatter.socialImage,
        parentNodeId: node.id,
        createNode,
        createNodeId,
        cache,
        store
      })
      // if the file was created, attach the new node to the parent node
      if (remoteFileNode) {
        fieldData.socialImage___NODE = remoteFileNode.id
      }
    } 

    const mdxPortfolioPostId = createNodeId(`${node.id} >>> MdxPortfolioPost`)
    await createNode({
      ...fieldData,
      // Required fields.
      id: mdxPortfolioPostId,
      parent: node.id,
      children: [],
      internal: {
        type: `MdxPortfolioPost`,
        contentDigest: createContentDigest(fieldData),
        content: JSON.stringify(fieldData),
        description: `Mdx implementation of the PortfolioPost interface`,
      },
    })
    createParentChildLink({ parent: node, child: getNode(mdxPortfolioPostId) })
  }
}

// These templates are simply data-fetching wrappers that import components
const PostTemplate = require.resolve(`./src/templates/post-query`)
const PostsTemplate = require.resolve(`./src/templates/posts-query`)

exports.createPages = async ({ graphql, actions, reporter }, themeOptions) => {
  const { createPage } = actions
  const { basePath } = withDefaults(themeOptions)

  const result = await graphql(`
    {
      allPortfolioPost(sort: { fields: [title], order: DESC }, limit: 1000) {
        edges {
          node {
            id
            slug
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panic(result.errors)
  }

  // Create Posts and Post pages.
  const { allPortfolioPost } = result.data
  const posts = allPortfolioPost.edges

  // Create a page for each Post
  posts.forEach(({ node: post }, index) => {
    const previous = index === posts.length - 1 ? null : posts[index + 1]
    const next = index === 0 ? null : posts[index - 1]
    const { slug } = post
    createPage({
      path: slug,
      component: PostTemplate,
      context: {
        id: post.id,
        previousId: previous ? previous.node.id : undefined,
        nextId: next ? next.node.id : undefined,
      },
    })
  })

  // // Create the Posts page
  createPage({
    path: basePath,
    component: PostsTemplate,
    context: {},
  })
}