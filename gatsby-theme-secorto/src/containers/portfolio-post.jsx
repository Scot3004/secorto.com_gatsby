import React from 'react'
import Layout from './layout'
import SEO from './seo'
import PortfolioPost from '../components/Portfolio/portfolio-post'

const Post = ({
  data: {
    portfolioPost: post,
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
    <PortfolioPost post={post} />
  </Layout>
)

export default Post
