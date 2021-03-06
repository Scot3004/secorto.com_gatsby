import React from 'react'

import { useColorMode } from 'theme-ui'
import Switch from './switch'
import sun from '../../assets/sun.png'
import moon from '../../assets/moon.png'

const iconCss = [{ pointerEvents: `none`, margin: 4 }]

const checkedIcon = (
  <img
    alt="moon indicating dark mode"
    src={moon}
    width="16"
    height="16"
    role="presentation"
    css={iconCss}
  />
)

const uncheckedIcon = (
  <img
    alt="sun indicating light mode"
    src={sun}
    width="16"
    height="16"
    role="presentation"
    css={iconCss}
  />
)

export default ({afterToggle, ...props}) => {
  const [colorMode, setColorMode] = useColorMode()
  const isDark = colorMode === `dark`
  const toggleColorMode = (e) => {
    setColorMode(isDark ? `light` : `dark`)
    setTimeout(function () {
      afterToggle()
    }, 400)
  }

  return (
    <Switch
      {...props}
      aria-label="Toggle dark mode"
      aria-checked={isDark}
      checkedIcon={checkedIcon}
      uncheckedIcon={uncheckedIcon}
      checked={isDark}
      onChange={toggleColorMode}
    />
  )
}
