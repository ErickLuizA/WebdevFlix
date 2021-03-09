import React, { useContext } from 'react'
import { Switch } from '../../../../contexts/theme'
import { FaAdjust } from 'react-icons/fa'
import { ToggleContainer } from './styles'

const Toggle = () => {

  const { toggle } = useContext(Switch)
  
  return (
    <ToggleContainer onClick={toggle} >
      <FaAdjust />
    </ToggleContainer>
  )

}

export default Toggle
