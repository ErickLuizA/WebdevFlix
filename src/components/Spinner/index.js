import React from 'react'
import { Message, Rotate } from './styles'

import { FaSpinner } from 'react-icons/fa'

const Spinner = () => {
  return (
    <>
      <Rotate>
        <FaSpinner />
      </Rotate>
      <Message>Please refresh the page if necessary</Message>
    </>
  )
}

export default Spinner