const multer = require('multer');
const Image = require('../models/images');



let ImageController = {};



ImageController.addImage = (req, res) => {
    let imageData = {
        image_name: req.body.image_name,
        image_url: req.body.image_url,
        image_status: req.body.image_status
    }

    Image
        .create(imageData,(err, data) => {
            if(err) {
                res.status(400)
                    .json(err)
            }else{
                res.status(201)
                    .json({imageData:data})
            }
        })
};







module.exports = ImageController;