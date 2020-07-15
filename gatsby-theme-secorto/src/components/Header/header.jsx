/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Link } from 'gatsby'

import Brand from './brand'

export default ({ title }) => {
  return (
    <header
      sx={{
        display: 'flex',
        alignItems: 'center',
        boxShadow: '0px 5px 10px 0px rgba(0, 0, 0, 0.5)',
      }}
    >
      <div sx={{ mx: 'auto' }} />
      <Link
        to="/"
        sx={{
          fontSize: 24,
          fontFamily: 'heading',
          color: 'primary',
          textDecoration: 'none',
          ':hover': {
            color: 'primaryHover',
          },
          padding: '0.2rem',
        }}
      >
        <Brand title={title} />
      </Link>
      <div sx={{ mx: 'auto' }} />
    </header>
  )
}
