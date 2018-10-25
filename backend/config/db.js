const mongoose = require('mongoose');



const dbConfig = () => {
    try {
        mongoose.connect('mongodb://localhost:27017/saga',{useNewUrlParser: true })
        console.log("Mongo connected")
    }
    catch (error){
        console.log("mongo not connected", error)
    }    
}


module.exports = dbConfig;