import React from "react"
import Img from "gatsby-image"
import { Link } from "gatsby"
import { Card, Text } from 'theme-ui'
import Layout from "./layout"

export default ({ location, posts, title }) => {
  return (
    <Layout location={location} title={title}>
      {posts.map(({node})=> (
        <Link to={node.slug} variant='nav' key={node.slug}>
          <Card
            sx={{
              maxWidth: 256,
            }}>
            <Img fluid={node.image.childImageSharp.fluid}></Img>
            <Text>
              {node.title}
            </Text>
          </Card>
        </Link>
      ))}
    </Layout>
  )
}
