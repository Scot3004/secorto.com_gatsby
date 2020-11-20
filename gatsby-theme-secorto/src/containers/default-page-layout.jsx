import React from 'react'
import BlogLayout from './layout'
import SEO from './seo'
import Footer from '../components/ui/page-footer'
import { useSiteMetadata } from '../hooks/use-site-metadata'

export default ({ location, children }) => {
  const {title, social} = useSiteMetadata()

  return (
    <BlogLayout location={location} title={ title }>
      <SEO title={ title } />
      {children}
      <Footer socialLinks={ social }/>
    </BlogLayout>
  )
}
