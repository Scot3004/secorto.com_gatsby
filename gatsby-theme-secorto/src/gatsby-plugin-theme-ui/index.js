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
      borderRadius: 4,
      boxShadow: theme => `0 0 8px  ${theme.colors.text}`,
      textDecoration: 'none',
      marginBottom: "1em",
      transition: "box-shadow .3s ease-out, transform .3s ease-out, opacity .2s ease-out",
      transitionDelay: ".1s",
      "&:hover": {
        transform: "translate(0, -4px)"
      }
    },
    compact: {
      padding: 1,
      borderRadius: 2,
      border: '1px solid',
      borderColor: 'muted',
    },
  },
})
