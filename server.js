const express = require ('express');
const routes = require('./routes/tea');
const mongoose = require('mongoose');
const helmet = require('helmet');
const compression = require('compression');

require('dotenv').config();

const app = express();

app.use(helmet());
app.use(compression()); //Compress all routes

app.use('/uploads', express.static('./uploads')); // makes uploads folder available

app.use(express.json()); //parses incoming requests as JSON

app.use('/', routes);

//establish connection to database

mongoose.connect(
    process.env.MONGODB_URI,
    { useFindAndModify: false,useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true},
    function (err) {
        if (err) return console.log("Error: ", err);
        console.log("MongoDB Connection -- Ready state is:", mongoose.connection.readyState);
       
    }   
);

const listener = app.listen(process.env.PORT || 3000);
module.exports = app;
