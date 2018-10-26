import React from 'react';
import { reduxForm } from 'redux-form';




const ImagePostForm = () => {
 return (
     <div>
         <h1>Image Posting Form</h1>
     </div>
 )
}

ImagePostForm = reduxForm({
    form: 'demo'
})(ImagePostForm);



export default ImagePostForm;