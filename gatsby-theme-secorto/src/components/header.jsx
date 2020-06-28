/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Link } from 'gatsby'

import Brand from './brand'
import Menu from './menu'

export default ({ title }) => {
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
        <Brand title={title} />
      </Link>
      <div sx={{ mx: 'auto' }} />
      <Menu />
    </header>
  );
};
