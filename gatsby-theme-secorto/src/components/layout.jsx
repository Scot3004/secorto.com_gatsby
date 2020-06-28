import React from 'react'
import { css, Styled } from 'theme-ui'
import Helmet from 'react-helmet'

import Header from './header'
import useBlogThemeConfig from '../hooks/configOptions.js'

export default ({ children, ...props }) => {
  const blogThemeConfig = useBlogThemeConfig()
  const { webfontURL } = blogThemeConfig

  return (
    <Styled.root>
      <Helmet>
        <link rel="stylesheet" href={webfontURL} />
      </Helmet>
      <Header {...props} />
      <div>
        <div
          css={css({
            maxWidth: `container`,
            mx: `auto`,
            px: 3,
            py: 3,
          })}
        >
          {children}
        </div>
      </div>
    </Styled.root>
  )
}
