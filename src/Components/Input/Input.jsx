import React from 'react'
import { ErrorMessage, Field } from 'formik'
import { FormControl, Label } from './Input.style'
import Tooltip from '../Tooltip/Tooltip'

const Input = (props) => {
    const { label, name, ...rest } = props
    return (
        <FormControl>
            <Label htmlFor={name}>{label}</Label>
            <Field id={name} name={name} {...rest} />
            <ErrorMessage name={name} component={Tooltip}/>
        </FormControl>
    )
}

export default Input