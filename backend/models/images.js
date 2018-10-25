const mongoose = require('mongoose');
let Schema = mongoose.Schema;




const Images = new Schema ({
    image_name:{
        type: String,
        required:true
    },
    image_url: {
        type:String,
        required: true
    },
    image_status: {
        type: Boolean,
        default:false
    }


},{timestamps});






let Image = mongoose.model('image', Images);



module.exports = Image;

