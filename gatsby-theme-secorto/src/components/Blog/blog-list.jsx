import React from 'react'
import { Flex, css } from 'theme-ui'

import PostLink from './blog-link'

const PostList = ({ posts }) => (
  <Flex
    css={css({
      flexWrap: 'wrap',
      justifyContent: 'space-between',
    })}
  >
    {posts.map(( node ) => (
      <PostLink key={node.slug} {...node} />
    ))}
  </Flex>
)

export default PostList
