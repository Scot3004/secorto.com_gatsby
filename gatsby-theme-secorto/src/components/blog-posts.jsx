import React from "react"

import Layout from "./layout"
import SEO from "./seo"
import Footer from "./page-footer"
import PostList from "./blog-list"

const Posts = ({ location, posts, siteTitle, socialLinks }) => (
  <Layout location={location} title={siteTitle}>
    <SEO title="Home" />
    <main>
      <PostList posts={posts} />
    </main>
    <Footer socialLinks={socialLinks} />
  </Layout>
)

export default Posts
