import React from 'react';
import Switch from '@material-ui/core/Switch';




let SwitchInput = ({
    value,
    checked,
    color,
    label,
    input,
    ...custom
}) => (
    <Switch 
        value={value}
        checked={checked}
        color={color}
        lable={label}
        onChange={(e, index, value) => input.onChange(value)}
        {...input}
        {...custom}
    />
)



export default  SwitchInput;