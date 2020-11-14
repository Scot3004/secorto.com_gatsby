import React from 'react'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { Styled } from 'theme-ui'

import PostHero from '../Post/post-hero'
import PostTitle from '../Post/post-title'
import Gallery from '../ui/gallery'
import { FaTasks, FaUser } from 'react-icons/fa'

export default ({ post }) => (
  <main>
    <PostHero post={post} />
    <PostTitle sx={{mt: 3 }}>{post.title}</PostTitle>
    <Styled.p><FaUser/> {post.role}</Styled.p>
    <Styled.p><FaTasks/> {post.responsibilities}</Styled.p>
    <MDXRenderer>{post.body}</MDXRenderer>
    <Gallery items={post.gallery} />
  </main>
)
