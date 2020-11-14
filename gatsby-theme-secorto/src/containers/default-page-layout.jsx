import React from 'react'
import BlogLayout from './layout'
import SEO from './seo'
import { useStaticQuery, graphql } from 'gatsby'
import Footer from '../components/ui/page-footer'

export default ({ location, children }) => {
  const { site } = useStaticQuery(graphql`
    query HeaderQuery {
      site {
        siteMetadata {
          title
          social {
            name
            url
          }
        }
      }
    }
  `)

  return (
    <BlogLayout location={location} title={site.siteMetadata.title}>
      <SEO title={site.siteMetadata.title} />
      {children}
      <Footer socialLinks={site.siteMetadata.social }/>
    </BlogLayout>
  )
}
