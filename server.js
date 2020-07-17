const express = require ('express');
const app = express();

app.use(express.json());

//add routes here

const listener = app.listen(process.env.PORT || 3000, () => {
    console.log('Your app is listening on port ' + listener.address().port)
})