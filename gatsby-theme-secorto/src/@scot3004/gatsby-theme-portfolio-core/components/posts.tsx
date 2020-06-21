import React from "react"
import PostList from "../../../components/portfolio-list"

export default ({location, data}) => {
  const { 
    allPortfolioPost, 
    site: {
      siteMetadata: {title}
    }
  } = data
  return (
    <PostList
      title={title}
      location={location}
      posts={allPortfolioPost.edges}
    />
  )
}
