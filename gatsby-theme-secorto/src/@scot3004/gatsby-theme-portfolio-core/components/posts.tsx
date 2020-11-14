import React from 'react'
import PostList from '../../../containers/portfolio-list'

export default ({ location, data }) => {
  const {
    allPortfolioPost,
    site: {
      siteMetadata: { title, social },
    },
  } = data
  return (
    <PostList
      title={title}
      location={location}
      posts={allPortfolioPost.edges}
      socialLinks={social}
    />
  )
}
