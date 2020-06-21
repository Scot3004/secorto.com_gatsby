import React from "react"
import BlogLayout from "gatsby-theme-blog/src/components/layout"
import SEO from "gatsby-theme-blog/src/components/seo"

export default props => 
<BlogLayout {...props}>
  <SEO title={props.title}/>
  {props.children}
</BlogLayout>