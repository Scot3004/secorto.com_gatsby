/** @jsx jsx */
import { jsx } from 'theme-ui'

import { Link } from "gatsby";
import ColorModeSwitch from "@scot3004/gatsby-theme-secorto/src/components/color-mode-switch";

export default ({ children, title, ...props }) => {
  return (
    <header
      sx={{
        display: 'flex',
        alignItems: 'center',
        variant: 'styles.header',
      }}>
      <Link to='/'
        sx={{
          variant: 'styles.navLink'
        }}>
        {title}
      </Link>
      <div sx={{ mx: 'auto' }} />
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
    </header>
  );
};
