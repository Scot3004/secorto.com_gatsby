import React from 'react'
import { css, Styled } from 'theme-ui'
import Helmet from 'react-helmet'

import Header from '../components/Header/header'
import Sidebar from '../components/Sidebar/sidebar'
import BurgerButton from '../components/Sidebar/burger-button'
import useBlogThemeConfig from '../hooks/configOptions'
import SidebarContext from '../context/SidebarContext'

export default ({ children, ...props }) => {
  const blogThemeConfig = useBlogThemeConfig()
  const { webfontURL } = blogThemeConfig
  return (
    <SidebarContext.Consumer>
      { sidebarOptions => (
        <Styled.root>
          <Helmet>
            <link rel="stylesheet" href={webfontURL} />
          </Helmet>
          <BurgerButton open={sidebarOptions.open} setOpen={sidebarOptions.toggleOpen} />
          <Sidebar open={sidebarOptions.open} setOpen={sidebarOptions.closeOnMobile} />
          <div
              css={css({
                ml: [0, 0, sidebarOptions.open? (theme=>theme.sizes.sidebar): 0],
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
      )}
    </SidebarContext.Consumer>
  )
}
