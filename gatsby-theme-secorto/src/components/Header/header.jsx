/** @jsx jsx */
import { jsx } from 'theme-ui'

import Brand from './brand'

export default ({ title }) => {
  return (
    <header
      sx={{
        display: 'flex',
        alignItems: 'center',
        boxShadow: '0px 5px 10px 0px rgba(0, 0, 0, 0.5)',
        height: [54]
      }}
    >
      <div sx={{ mx: 'auto' }} />

      <Brand title={title} />

      <div sx={{ mx: 'auto' }} />
    </header>
  )
}
