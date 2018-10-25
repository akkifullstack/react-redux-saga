const express = require('express');
const router = express.Router();
const multer = require('multer');
const ImageController = require('../controller/imageControllers');



router
    .route('/')
    .post(multer().array(), ImageController);












module.exports = router;





