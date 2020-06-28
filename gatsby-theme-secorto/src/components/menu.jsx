/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Link } from 'gatsby'

import ColorModeSwitch from './color-mode-switch'

export default () => (
  <div sx={{
    display: 'flex',
    alignItems: 'center'
  }}>
    <Link to='/blog'
      sx={{
        variant: 'styles.navLink'
      }}>
      Blog
    </Link>
    <Link to='/portafolio'
      sx={{
        variant: 'styles.navLink'
      }}>
      Portafolio
    </Link>
    <ColorModeSwitch sx={{
      mr: 2
    }}
  />
  </div>
)