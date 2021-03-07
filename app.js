const express = require("express");
const path = require('path');
const viewRouter = require('./routes/viewRoute');
const app = express()

//Set View Engine
app.set('view engine','pug');
app.set('views',path.join(__dirname,'views'));
//Use static file
app.use(express.static(path.join(__dirname,'public')));

//Route
app.use('/',viewRouter);




module.exports = app;



