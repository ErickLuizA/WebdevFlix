import React,{ useContext } from 'react'
import { Nav, LogoWrapper, Logo, FlexContainer, Button } from './styles'
import logo from '../../assets/logo.png'
import darklogo from '../../assets/darklogo.png'
import Toggle from '../../components/Toggle'
import { Link, useLocation } from 'react-router-dom'
import { Switch } from '../../contexts/theme'

function Navbar() {
  const location = useLocation().pathname
  const { theme } = useContext(Switch)

  return (
    <Nav>
      <FlexContainer>
        <LogoWrapper>
        {theme.background === '#000' ? 
          <Link to="/" >
            <Logo src={darklogo} alt="WebDevFlix logo" />
          </Link>:
          <Link to="/" >
            <Logo src={logo} alt="WebDevFlix logo" />
          </Link>}
        </LogoWrapper>
        <div>
          <Toggle nav/>
          <Link to="/newepisode" >
          {location !== "/newepisode" ?          
           <Button > 
              New Episode
            </Button> : null} 
          </Link>
        </div>
      </FlexContainer>
    </Nav>
  )
}

export default Navbar
