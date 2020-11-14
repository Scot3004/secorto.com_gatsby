import baseTheme from '@scot3004/gatsby-theme-secorto/src/gatsby-plugin-theme-ui'
import merge from 'lodash.merge'
// lodash.merge will deeply merge custom values with the
// blog theme's defaults
export default merge({}, baseTheme, {
  colors: {
    text: '#222',
    primary: '#004f53',
    timeline: {
      workBG: baseTheme.colors.sidebar.background,
      academicBG: '#993399',
      previousWorkBG: '#777',
      iconColor: '#fff'
    },
    modes: {
      dark: {
        primary: '#A2C3C3',
      },
    },
  },
})
