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
        boxShadow: '0px 5px 10px 0px rgba(0, 0, 0, 0.5)',
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
