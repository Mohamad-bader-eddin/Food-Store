import React from "react";
import DatePicker from "../Input/DatePicker";
import Input from "../Input/Input";
import Select from "../Input/Select";
import Textarea from "../Input/Textarea";
import Time from "../Input/Time";

function FormikControl(props){
    const {control , ...rest} = props
    switch(control){
        case 'input' : return <Input {...rest}/>
        case 'textarea' : return <Textarea {...rest}/>
        case 'date' : return <DatePicker {...rest} />
        case 'select' : return <Select {...rest}/>
        case 'time' : return <Time {...rest}/>
        default : return null
    }
}

export default FormikControl