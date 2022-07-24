import React from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Field, ErrorMessage } from 'formik'
import Tooltip from '../Tooltip/Tooltip'
import { FormControl, Label } from './Input.style'

const Time = (props) => {
    const { label, name, ...rest } = props
    return (
        <FormControl>
            <Label htmlFor={name}>{label}</Label>
            <Field name={name}>
                {
                    ({ form, field }) => {
                        const { setFieldValue } = form
                        const { value } = field
                        return <DatePicker id={name} {...field} {...rest} selected={value}
                            onChange={val => setFieldValue(name, val)}
                            showTimeSelect
                            showTimeSelectOnly
                            isClearable
                            // timeIntervals={15}
                            timeCaption="Time"
                            dateFormat="h:mm aa"
                        />
                    }
                }
            </Field>
            <ErrorMessage name={name} component={Tooltip} />
        </FormControl>
    )
}

export default Time