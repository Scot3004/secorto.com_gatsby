import React from 'react'
import { css, Styled } from 'theme-ui'
import Helmet from 'react-helmet'

import Header from '../components/Header/header'
import Sidebar from '../components/Sidebar/sidebar'
import BurgerButton from '../components/Sidebar/burger-button'
import useBlogThemeConfig from '../hooks/configOptions'



export default ({ children, ...props }) => {
  const blogThemeConfig = useBlogThemeConfig()
  const { webfontURL } = blogThemeConfig
  const [open, setOpen] = React.useState(false);
  return (
    <Styled.root>
      <Helmet>
        <link rel="stylesheet" href={webfontURL} />
      </Helmet>
      <BurgerButton open={open} setOpen={setOpen} />
      <Sidebar open={open} setOpen={setOpen} />

      <div
          css={css({
            ml: [0, 0, open? (theme=>theme.sizes.sidebar): 0],
            transition: 'margin-left 0.3s ease-in-out;'
          })}
        >
          <Header {...props} />
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
