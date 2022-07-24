import React from 'react'
import { Field , ErrorMessage} from 'formik'
import { FormControl, Label } from './Input.style'
import Tooltip from '../Tooltip/Tooltip'

const Select = (props) => {
    const {label , name , options , ...rest} = props
  return (
    <FormControl>
        <Label htmlFor={name}>{label}</Label>
        <Field as='select' id={name} name={name} {...rest} >
            {
                options.map(option =>{
                    return(
                        <option key={option.value} value={option.value}>{option.key}</option>
                    )
                })
            }
        </Field>
        <ErrorMessage name={name} component={Tooltip}/>
    </FormControl>
  )
}

export default Select