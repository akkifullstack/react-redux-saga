import React from 'react';
import { reduxForm, Field } from 'redux-form';
import InputTextField from '../../../components/forms/TextField';
import SwitchInput from '../../../components/forms/Switch';
import { Button } from '@material-ui/core/Button';


let ImagePostForm = () => {
    return (
        <section>
            <form>
                <div>
                    <Field
                        name="image_name"
                        component={InputTextField}
                        label="Image Name"
                        required={true} />
                </div>
                <div>
                    <Field
                        name="image_url"
                        component={InputTextField}
                        label="Image Url" />
                </div>
                <div>
                    <label>Image Status</label>
                    <Field
                        name="image_status"
                        component={SwitchInput}
                    />
                </div>
                <button type="submit" style={{backgroundColor:'transparent', border:'1px solid rgb(225, 0, 80)', color:'rgb(225, 0, 80)', padding:'10px', marginLeft:'20px', borderRadius:'20px', cursor: 'pointer'}} type="submit" >Submit</button>
            </form>
        </section>
    )
}

ImagePostForm = reduxForm({
    form: 'demo'
})(ImagePostForm);



export default ImagePostForm;