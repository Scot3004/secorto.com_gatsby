import React from "react"

import PostLink from "./blog-link"

const PostList = ({ posts }) => (
  <>
    {posts.map(({ node }) => (
      <PostLink key={node.slug} {...node} />
    ))}
  </>
)

export default PostList
