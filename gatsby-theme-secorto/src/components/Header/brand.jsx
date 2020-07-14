/** @jsx jsx */
import { jsx } from 'theme-ui'

import Logo from '../../assets/logo.svg'

export default () => (
  <div
    sx={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 0
    }}>
    <img
      src={Logo} alt="logo" 
      sx={{width: [32, 36]}}></img>
    <span sx={{ml: 2, fontSize: [32]}}>SeCOrTo</span>
  </div>
)
