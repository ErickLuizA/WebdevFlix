import React from 'react'
import { Container } from './styles'
import Button from '../../components/Button'
import Toggle from './components/Toggle'
import {Link, useLocation } from 'react-router-dom'

const Bottombar = () => {

  const location = useLocation().pathname

  return (
    <Container>
      {location !== "/newepisode" ? 
      <>
        <Link to="/newepisode" >
          <Button> New Episode </Button>
        </Link>    
        <Toggle />
      </>:
      <Toggle />
      }
 
    </Container>  
  )
}

export default Bottombar
