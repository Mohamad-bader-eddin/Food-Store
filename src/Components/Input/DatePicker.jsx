import React from 'react'
import DateView from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Field, ErrorMessage } from 'formik'
import Tooltip from '../Tooltip/Tooltip'
import { FormControl, Label } from './Input.style'

const DatePicker = (props) => {
    const { label, name, ...rest } = props
  return (
    <FormControl>
        <Label htmlFor={name}>{label}</Label>
        <Field name={name}>
            {
                ({form , field})=>{
                    const {setFieldValue} = form
                    const {value} = field
                    return <DateView id={name} {...field} {...rest} selected={value} 
                    onChange={val => setFieldValue(name , val)}
                    dateFormat="dd/MM/yyyy"
                    isClearable
                    peekNextMonth
                    showMonthDropdown
                    showYearDropdown
                    dropdownMode="select" />
                }
            }
        </Field>
        <ErrorMessage name={name} component={Tooltip} />
    </FormControl>
  )
}

export default DatePicker