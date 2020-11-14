import React from 'react'

import Layout from './layout'
import SEO from './seo'
import Footer from '../components/ui/page-footer'
import PostList from '../components/Blog/blog-list'

const Posts = ({ location, posts, siteTitle, socialLinks }) => (
  <Layout location={location} title="Blog">
    <SEO title="Blog" />
    <main>
      <PostList posts={posts} />
    </main>
    <Footer socialLinks={socialLinks} />
  </Layout>
)

export default Posts
