import React, { useContext } from 'react'
import { Switch } from '../../contexts/theme'
import { FaAdjust } from 'react-icons/fa'
import { ToggleContainer } from './styles'

const Toggle = ({ nav  }) => {

  const { toggle } = useContext(Switch)
  
  return (
    <ToggleContainer nav  onClick={toggle} >
      <FaAdjust />
    </ToggleContainer>
  )

}

export default Toggle
