import baseTheme from "gatsby-theme-blog/src/gatsby-plugin-theme-ui"
import merge from "lodash.merge"
// lodash.merge will deeply merge custom values with the
// blog theme's defaults
export default merge({}, baseTheme, {
  initialColorMode: `dark`,
  colors: {
    text: "#222",
    primary: "#00adb5",
    modes: {
      dark: {
        primary: "#699ea0"
      }
    }
  },
 
})
