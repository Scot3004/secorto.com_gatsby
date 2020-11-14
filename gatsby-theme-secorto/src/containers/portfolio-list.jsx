/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Flex, css } from 'theme-ui'

import Layout from './layout'
import SEO from './seo'
import PortfolioLink from '../components/Portfolio/portfolio-link'
import Footer from '../components/ui/page-footer'

export default ({ location, posts, title, socialLinks }) => {
  return (
    <Layout location={location} title={title}>
      <SEO title="Portfolio" />
      <Flex
        css={css({
          flexWrap: 'wrap',
          justifyContent: 'space-between',
        })}
      >
        {posts.map(({ node }) => (
          <PortfolioLink key={node.slug} {...node} />
        ))}
      </Flex>
      <Footer socialLinks={ socialLinks }/>
    </Layout>
  )
}
