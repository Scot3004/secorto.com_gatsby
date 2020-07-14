import React from 'react'
import { MDXRenderer } from "gatsby-plugin-mdx"
import { Styled } from "theme-ui"

import PostHero from '../Post/post-hero'
import PostTitle from '../Post/post-title'
import Gallery from '../ui/gallery'

export default ({post}) => (
  <main>
    <PostHero post={post} />
    <PostTitle>{post.title}</PostTitle>
    <Styled.p>Rol: {post.role}</Styled.p>
    <Styled.p>Responsabilidades: {post.responsibilities}</Styled.p>
    <MDXRenderer>{post.body}</MDXRenderer>
    <Gallery items={post.gallery}/>
  </main>
)