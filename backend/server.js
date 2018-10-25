const express = require('express');
const bodyparser = require('body-parser');
const dbConfig = require('./config/db');

let app = express();

dbConfig()

app.set('port', 4001);
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:false}));

app.use((req, res, next)=>{
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers','Origin, X-Requested_with, Content-Type', 'Accept');
    res.setHeader('Access-Control-Allow-Methods','POST, GET, PUT, DELETE, PATCH, OPTIONS');
    next();
})



app.use(function(req, res, next){
	console.log(req.method, req.url)
	next();
})


let server = app.listen(app.get('port'), () => {
    let port = server.address().port;
    console.log('Connected to '+ port);
})