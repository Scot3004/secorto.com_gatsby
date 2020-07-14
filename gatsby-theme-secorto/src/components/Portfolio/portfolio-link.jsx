/** @jsx jsx */
import { jsx, Card, Text } from 'theme-ui'
import Img from "gatsby-image"
import { Link } from "gatsby"

export default ({ slug, image, title }) => (
  <Card
    as={Link}
    to={slug}
    sx={{
      flex: ["0 1 100%", "0 1 49%", "0 1 32%"],
    }}>
    <Img sizes={{...image.childImageSharp.fluid, aspectRatio: 16/9 }}></Img>
    <Text sx={{
      color: 'primary',
      fontFamily: 'heading',
      textAlign: 'center',
      margin: 1
    }}>
      {title}
    </Text>
  </Card>
)
