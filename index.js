'use strict';

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const { nextTick } = require("process");
const Schema = mongoose.Schema;
mongoose.connect('mongodb://localhost:27017/movies_db',
    { useNewUrlParser: true });



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


const reviewSchema = new Schema({
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
    reviews: [reviewSchema]
})

const reviewModel = mongoose.model("reviews", reviewSchema);
const actorModel = mongoose.model("actors", actorSchema);
const movieModel = mongoose.model("movies", movieSchema);

module.exports = {
    reviewModel,
    actorModel,
    movieModel
};





const server = app.listen(4417, () => {
    console.log(`Server started succesfully on port ${server.address().port}`);
})




// getting files
// router.get("/getAllDucks", (req,res) => duckModel.find({})
// .then(results => res.send(results))
// .catch(err => nextTick(err)));

// create
// duckModel.create(req.body)
// .then(results => res.status(201).send(results))
// .catch(err => nextTick(err)));
