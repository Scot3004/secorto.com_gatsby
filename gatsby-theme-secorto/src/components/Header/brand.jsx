/** @jsx jsx */
import { jsx } from 'theme-ui'

import HomePage from './homepage-link'

export default ({title}) => (
  <div
    sx={{
      display: 'flex',
      alignItems: 'center',
      fontFamily: 'heading',
      justifyContent: 'center',
      padding: 0,
    }}
  >
    <HomePage />
    <span sx={{ ml: 2, fontSize: [32], color: 'primary' }}>{title}</span>
  </div>
)
