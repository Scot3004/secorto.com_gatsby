import React from "react"
import Img from "gatsby-image"
import { Link } from "gatsby"
import { Styled } from 'theme-ui'
import Layout from "./layout"

export default ({ location, posts, title }) => {
  return (
    <Layout location={location} title={title}>
      {posts.map(({node})=> (
        <Link to={node.slug} variant='nav'>
          <Styled.div
            sx={{
              maxWidth: 256,
            }}>
            <Img fluid={node.image.childImageSharp.fluid}></Img>
            <Styled.p>
              {node.title}
            </Styled.p>
          </Styled.div>
        </Link>
      ))}
    </Layout>
  )
}
