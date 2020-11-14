/** @jsx jsx */
import { Link } from 'gatsby'
import { jsx } from 'theme-ui'

import Logo from '../../assets/logo.svg'

export default () => (
  <div>
    <Link
      to="/"
    >
      <img
        src={Logo}
        alt="logo"
        sx={{
          width: [36, 42],
          height: [36, 42],
          verticalAlign: 'middle',
          border: "3px solid transparent",
          borderRadius: "50%",
          transition: "border-color 1s",
          ":hover": {
            borderColor: "hover",
          },
        }}></img>
    </Link>
  </div>
)
