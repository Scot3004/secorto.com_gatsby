import React from 'react'
import { css, Styled } from 'theme-ui'
import Helmet from 'react-helmet'

import Header from './header'
import Sidebar from './sidebar'
import BurgerButton from './burger-button'
import useWindowDimensions from '../hooks/useWindowDimensions'
import useBlogThemeConfig from '../hooks/configOptions'
import {useThemeUI} from 'theme-ui'



export default ({ children, ...props }) => {
  const blogThemeConfig = useBlogThemeConfig()
  const { webfontURL } = blogThemeConfig
  const { theme } = useThemeUI()
  const { width } = useWindowDimensions();
  const [open, setOpen] = React.useState(width>theme.sizes.sidebarBreakpoint);
  

  return (
    <Styled.root>
      <Helmet>
        <link rel="stylesheet" href={webfontURL} />
      </Helmet>
      <BurgerButton open={open} setOpen={setOpen} />
      <Sidebar open={open} setOpen={setOpen} />

      <div
          css={css({
            ml: open? (theme=>theme.sizes.sidebar): 0,
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
