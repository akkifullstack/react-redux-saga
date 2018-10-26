import React from 'react';
import TextField from '@material-ui/core/TextField';






let InputTextField = ({required, validate,input, label, meta: {touched, error}, ...custom }) =>(
    <TextField 
        label={label}
        hintText={label}
        errorText={ touched && error}
        required={required}
        validate={validate}
        {...input}
        {...custom}
    />
);


export default InputTextField;