import React from 'react'

import Layout from './layout'
import SEO from './seo'
import BlogPost from '../components/Blog/blog-post'
import PostFooter from './post-footer'

const Post = ({
  data: {
    post,
    site: {
      siteMetadata: { title },
    },
  },
  location,
  previous,
  next,
}) => (
  <Layout location={location} title={title}>
    <SEO
      title={post.title}
      description={post.excerpt}
      imageSource={
        post.socialImage
          ? post.socialImage?.childImageSharp?.fluid.src
          : post.image?.childImageSharp?.fluid.src
      }
      keywords={post.keywords}
      imageAlt={post.imageAlt}
    />
    <BlogPost post={post} />
    <PostFooter {...{ previous, next }} />
  </Layout>
)

export default Post
