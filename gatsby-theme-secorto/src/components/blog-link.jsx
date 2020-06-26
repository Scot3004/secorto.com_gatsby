/** @jsx jsx */
import { Styled, Card, Text, jsx } from "theme-ui"
import Img from "gatsby-image"
import { Link } from "gatsby"

const PostLink = ({ title, slug, date, excerpt, image }) => (
  <Card
    as={Link}
    to={slug}
    sx={{
      flex: ["0 1 100%", "0 1 49%"],
    }}>

    {image && <Img sizes={{...image.childImageSharp.fluid, aspectRatio: 16/9 }}></Img>}
    <Text sx={{
      color: 'primary',
      fontFamily: 'heading'
    }}>
      <h2>{title}</h2>
      <small sx={{
        color: 'text',
      }}>{date}</small>
      <Styled.p sx={{
        color: 'text',
      }}>{excerpt}</Styled.p>
    </Text>
  </Card>
)

export default PostLink
