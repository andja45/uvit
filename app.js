const express = require('express');
const path = require('path'); 
const mongoose = require('mongoose') 

const studentRoutes = require('./routes/student');  
const examRouter = require('./routes/exam');  // NOVO

const app = express(); 

mongoose.connect("mongodb://localhost:27017/Fakultet", {
    serverSelectionTimeoutMS: 5000,
    heartbeatFrequencyMS: 10000,
});

app.use(express.static(path.join(__dirname, "public")));  

app.use(express.urlencoded({ extended: true }));  
app.use(express.json());

app.set('view engine', 'ejs'); 
app.set('views', 'views/'); 

app.use('/student', studentRoutes); 
app.use('/ispiti', examRouter);  // NOVO

// MIDDLEWARE SA 4 ARGU KOJI ZOVE NEXT(ERR)!
app.use(function(err, req, res, next){ 
    console.log('greska na serveru');
    console.log(err);
    console.log(err.stack);  

    res.render('error.ejs', {
        message: err.message  // SAD JE UNIVERZALNA OBRADA
    });
});

module.exports = app; 
