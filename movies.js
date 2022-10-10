const mongoose = require("mongoose");
const Schema = mongoose.Schema;
mongoose.connect('mongodb://localhost:27017/movies_db',
    { useNewUrlParser: true });

//Create a 'movies' schema. Include fields such as title, 
//description, date released, etc.
//Using subdocuments, include additional nested data such as reviews 
//and actors.

const actorSchema = new Schema({
    _id: Schema.Types.ObjectId,
    name: {
        type: String,
        required: true,
        minlength: 2
    },
    movies: [{ type: Schema.Types.ObjectId, ref: 'movies'}]
});


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
    _id: Schema.Types.ObjectId,
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
    actors: [{ type: Schema.Types.ObjectId, ref: 'actors' }],
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




//   634431c055c391bc4f4a98b3 _ leo Di Caprio
//   634431f255c391bc4f4a98b6 - Wolf of Wall St