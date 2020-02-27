import React from "react"
import BlogLayout from "gatsby-theme-blog/src/components/layout"
import { graphql } from 'gatsby'


export default ({ location, data, ...props}) => {
  const { site } = data
  return (
    <BlogLayout  location={location} title={site.siteMetadata.title} >Hola mundo</BlogLayout>
  )
}

export const query = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
  }`;
