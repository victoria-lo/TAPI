const mongoose = require("mongoose");

const TeaSchema = new mongoose.Schema({
    name: {type:String, required:true},
    image: String,
    description: String,
    keywords: String,
    origin: String,
    brew_time: Number,
    temperature: Number,
    comments: [{ text: String, date: {type:String, default: new Date()} }]
});

const Tea = mongoose.model('Tea', TeaSchema);

module.exports = Tea;

/*
{
    "name": "Jasmine Tea",
    "image": "an image file url",
    "description": "Jasmine tea (茉莉花茶) is tea scented with the aroma of jasmine blossoms.",
    "keywords": "aromatic, china, sweet",
    "origin":"China",
    "brew_time": 2,
    "temperature": 80,
    "comments": []
}
*/