import merge from "deepmerge"
import typography from "./typography"
import colors from "./colors"
import styles from "./styles"
import prism from "./prism"

export default merge(typography, {
  useColorSchemeMediaQuery: true,
  colors,
  sizes: {
    container: 1280,
  },
  styles,
  prism,
  navlink:  {
    fontSize: 128,
    fontFamily: 'heading',
    fontWeight: 'heading',
    color: 'primary',
    mt: 4,
    mb: 2,
  },
  cards: {
    primary: {
      padding: 2,
      borderRadius: 4,
      boxShadow: '0 0 8px rgba(0, 0, 0, 0.125)',
    },
    compact: {
      padding: 1,
      borderRadius: 2,
      border: '1px solid',
      borderColor: 'muted',
    },
  },
})
