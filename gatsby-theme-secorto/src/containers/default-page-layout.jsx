import React from 'react'
import BlogLayout from './layout'
import SEO from './seo'
import { useStaticQuery, graphql } from 'gatsby'

export default ({ location, children }) => {
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
    <BlogLayout location={location} title={site.siteMetadata.title}>
      <SEO title={site.siteMetadata.title} />
      {children}
    </BlogLayout>
  )
}
