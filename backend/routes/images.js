const express = require('express');
const router = express.Router();
const multer = require('multer');
const ImageController = require('../controller/imageControllers');



router
    .route('/new')
    .post(multer().array(), ImageController.addImage);







module.exports = router;





