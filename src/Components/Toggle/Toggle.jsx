import React from 'react'
import { Input, InputWrapper, Slider } from './Toggle.style'

const Toggle = ({ onChange }) => {
  return (
    <InputWrapper>
        <Input type='checkbox' onChange={onChange}/>
        <Slider />
    </InputWrapper>
  )
}

export default Toggle