import React from "react"
import Img from "gatsby-image"
import Layout from "./layout"
import { Styled } from "theme-ui"

import { MDXRenderer } from "gatsby-plugin-mdx"
import Gallery from "./gallery"

const Post = ({
  data: {
    portfolioPost: post,
    site: {
      siteMetadata: { title },
    },
  },
  location
}) => (
  <Layout location={location} title={title}>
    <Img fluid={post.image.childImageSharp.fluid}></Img>
    <Styled.h1>{post.title}</Styled.h1>
    <Styled.p>Rol: {post.role}</Styled.p>
    <Styled.p>Responsabilidades: {post.responsibilities}</Styled.p>
    <MDXRenderer>{post.body}</MDXRenderer>
    <Gallery items={post.gallery}/>
  </Layout>
)

export default Post