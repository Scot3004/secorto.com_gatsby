/** @jsx jsx */
import { jsx } from 'theme-ui'
import Img from "gatsby-image"
import { Link } from "gatsby"
import { Card, Text, Flex, css } from 'theme-ui'

import Layout from "./layout"
import SEO from "./seo"

export default ({ location, posts, title }) => {
  return (
    <Layout location={location} title={title}>
      <SEO title="Portfolio" />
      <Flex css={css({
        flexWrap: "wrap",
        justifyContent: "space-between"
      })}>
        {posts.map(({node})=> (
            <Card
              as={Link}
              to={node.slug}
              key={node.slug}
              sx={{
                flex: ["0 1 100%", "0 1 49%", "0 1 32%"],
                textDecoration: 'none',
                marginBottom: "1em",
                transition: "box-shadow .3s ease-out, transform .3s ease-out, opacity .2s ease-out",
                transitionDelay: ".1s",
                "&:hover": {
                  transform: "translate(0, -4px)"
                }
              }}>
              <Img sizes={{...node.image.childImageSharp.fluid, aspectRatio: 16/9 }}></Img>
              <Text sx={{
                color: 'primary',
                fontFamily: 'heading'
              }}>
                {node.title}
              </Text>
            </Card>
        ))}
      </Flex>
    </Layout>
  )
}
