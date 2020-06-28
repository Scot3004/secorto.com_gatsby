/** @jsx jsx */
import { jsx } from 'theme-ui'

import Logo from '../../../assets/logo.svg'

export default ({title}) => (
  <div
    sx={{
      display: 'flex',
      alignItems: 'center'
    }}>
    <img
      src={Logo} alt="logo" 
      sx={{width: [32, 36]}}></img>
    <span sx={{ml: 2, fontSize: [32]}}>{title}</span>
  </div>
)