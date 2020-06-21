import merge from "deepmerge"
import typography from "./typography"
import colors from "./colors"
import styles from "./styles"
import prism from "./prism"

export default merge(typography, {
  useColorSchemeMediaQuery: true,
  colors,
  sizes: {
    container: 672,
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
  }
})
