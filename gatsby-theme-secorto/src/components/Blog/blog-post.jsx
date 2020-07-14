import React from 'react'
import { MDXRenderer } from "gatsby-plugin-mdx"

import PostHero from '../Post/post-hero'
import PostTitle from '../Post/post-title'
import PostDate from '../Post/post-date'

export default ({post}) => (
  <main>
    <PostHero post={post} />
    <PostTitle>{post.title}</PostTitle>
    <PostDate>{post.date}</PostDate>
    <MDXRenderer>{post.body}</MDXRenderer>
  </main>
)