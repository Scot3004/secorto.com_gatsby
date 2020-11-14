/** @jsx jsx */
import { Link } from 'gatsby'
import { jsx } from 'theme-ui'

export default ({children, ...props}) => (
  <div>
    <Link {...props}
      sx={{
        color: 'primary',
        textDecoration: "none",
        ":hover": {
          color: "hover"
        }
      }}
    >
      {children}
    </Link>
  </div>
)
