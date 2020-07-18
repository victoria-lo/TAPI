const express = require ('express');
const routes = require('./routes/tea');

const app = express();

app.use(express.json()); //parses incoming requests as JSON

app.use('/', routes);

const listener = app.listen(process.env.PORT || 3000, () => {
    console.log('Your app is listening on port ' + listener.address().port)
})