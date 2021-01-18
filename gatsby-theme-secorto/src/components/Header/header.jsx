/** @jsx jsx */
import { jsx } from 'theme-ui'

import HomePageLink from './homepage-link'

export default ({ children }) => {
  return (
    <header
      sx={{
        display: 'flex',
        alignItems: 'center',
        boxShadow: theme => `0 0 8px  ${theme.colors.primary}`,
        minHeight: [58]
      }}
    >
      <div sx={{ mx: 'auto' }} />

      <div
        sx={{
          display: 'flex',
          alignItems: 'center',
          fontFamily: 'kalam',
          justifyContent: 'center',
          padding: 0,
        }}
      >
        <HomePageLink />
        <span sx={{ ml: 2, fontSize: [42], color: 'primary' }}>{children}</span>
      </div>
      <div sx={{ mx: 'auto' }} />
    </header>
  )
}
