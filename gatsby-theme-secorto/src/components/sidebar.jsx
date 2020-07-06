/** @jsx jsx */
import { jsx } from 'theme-ui'

import { Link } from 'gatsby'
import {FcFaq, FcBriefcase} from 'react-icons/fc'


import Brand from './brand'
import ColorModeSwitch from './color-mode-switch'
import StyledMenu from './menu'

const Menu = ({ open, title }) => {
  return (
    <StyledMenu open={open}>
      <Link to='/'
        sx={{
          variant: 'styles.navLink'
        }}>
        <Brand />
      </Link>
      <Link to='/blog'
        sx={{
          variant: 'styles.navLink'
        }}>
        <FcFaq />Blog
      </Link>
      <Link to='/portafolio'
        sx={{
          variant: 'styles.navLink'
        }}>
        <FcBriefcase />Portafolio
      </Link>
      <ColorModeSwitch sx={{
          mx: 'auto'
        }}
      />
    </StyledMenu>
  )
}

export default Menu