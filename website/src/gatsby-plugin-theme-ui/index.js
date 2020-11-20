import baseTheme from '@scot3004/gatsby-theme-secorto/src/gatsby-plugin-theme-ui'
import merge from 'lodash.merge'
// lodash.merge will deeply merge custom values with the
// blog theme's defaults
const darkCyan = '#004f53'
const darkPurple = '#993399'
const lightCyan = '#A2C3C3'

export default merge({}, baseTheme, {
  colors: {
    text: '#222',
    primary: darkCyan,
    timeline: {
      workBG: darkCyan,
      academicBG: darkPurple,
      previousWorkBG: '#777',
      iconColor: '#fff'
    },
    sidebar: {
      background: darkCyan,
    },
    modes: {
      dark: {
        primary: lightCyan,
      },
    },
  },
})
