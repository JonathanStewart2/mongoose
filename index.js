'use strict';

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// mongoose.connect('mongodb://localhost:27017/example',
//     { useNewUrlParser: true });

mongoose.connect('mongodb://localhost:4417/example', { useNewUrlParser: true },
    function (err) {
         if (err) {
             console.log(`Error: ${err}`);
        } else {
            console.log("Connection ready");
        }
    });

//Create a 'movies' schema. Include fields such as title, 
//description, date released, etc.
//Using subdocuments, include additional nested data such as reviews 
//and actors.

const actorSchema = new Schema({
    name: {
        type: String,
        required: true,
        minlength: 2
    } 
})


const reviewsSchema = new Schema({
    filmTitle: {
        type: String,
        required: true,
        maxlength: 255
    },
    reviewerName: {
        type: String,
        required: true,
        maxlength: 255,
        minlength: 2
    },
    reviewDate: {
        type: Date,
        required: true
    },
    reviewBody: {
        type: String,
        required: true
    }
})


const movieSchema = new Schema({
    title: {
        type: String,
        required: true,
        minlength: 2
    },
    description: {
        type: String,
        required: false,
        maxlength: 255
    },
    releaseDate: {
        type: Date,
        required: false
    },
    actors: [actorSchema],
    reviews: [reviewsSchema]
})








const server = app.listen(4417, () => {
    console.log(`Server started succesfully on port ${server.address().port}`);
})