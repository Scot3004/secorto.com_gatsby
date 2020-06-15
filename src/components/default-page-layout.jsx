import React from "react"
import BlogLayout from "gatsby-theme-blog/src/components/layout"
import { useStaticQuery, graphql } from 'gatsby'


export default ({ location, children}) => {
  const { site } = useStaticQuery(graphql`
    query HeaderQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
    `)
  
  return (
    <BlogLayout location={location} title={site.siteMetadata.title} >
      {children}
    </BlogLayout>
  )
}
