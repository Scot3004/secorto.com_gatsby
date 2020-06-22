import React from "react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { Styled } from "theme-ui"

import Layout from "./layout"
import SEO from "./seo"
import PostTitle from "./post-title"
import PostFooter from "./post-footer"
import PostHero from "./post-hero"
import Gallery from "./gallery"

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
    <main>
      <PostHero post={post} />
      <PostTitle>{post.title}</PostTitle>
      <Styled.p>Rol: {post.role}</Styled.p>
      <Styled.p>Responsabilidades: {post.responsibilities}</Styled.p>
      <MDXRenderer>{post.body}</MDXRenderer>
      <Gallery items={post.gallery}/>
    </main>
    <PostFooter {...{ previous, next }} />
  </Layout>
)

export default Post