const express = require ('express');
const routes = require('./routes/tea');
const mongoose = require('mongoose');

const app = express();

app.use(express.json()); //parses incoming requests as JSON

app.use('/', routes);

//establish connection to database
mongoose.connect(
    process.env.URI,
    { useFindAndModify: false,useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true},
    (err) => {
        if (err) return console.log("Error: ", err);
        console.log("MongoDB Connection -- Ready state is:", mongoose.connection.readyState);
    }
);


const listener = app.listen(process.env.PORT || 3000, () => {
    console.log('Your app is listening on port ' + listener.address().port)
})