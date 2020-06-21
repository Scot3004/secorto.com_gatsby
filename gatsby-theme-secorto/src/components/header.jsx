/** @jsx jsx */
import { jsx } from 'theme-ui'

import { Link } from "gatsby";
import ColorModeSwitch from "./color-mode-switch";

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
      <Link to='/portfolio'
        sx={{
          variant: 'styles.navLink'
        }}>
        Portfolio
      </Link>
      <ColorModeSwitch sx={{
          mr: 2
        }}
      />
    </header>
  );
};
