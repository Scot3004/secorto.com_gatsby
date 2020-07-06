/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Link } from 'gatsby'

import Logo from './logo.svg'

export default () => (
  <div>
      <Link to='/'
        sx={{
          variant: 'styles.navLink',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          textAlign: 'center'
        }}>
        <img
          src={Logo} alt="logo" 
          sx={{width: 128}}></img>
        <p sx={{fontSize: '2rem', mb: '0.5rem'}}>Sergio Carlos Orozco Torres</p>
        <p sx={{fontSize: 16, color: 'sidebar.color', margin: 0}}>Software developer</p>
      </Link>
      <hr sx={{width: '10%', margin: '10px auto 0'}}></hr>
  </div>
)
