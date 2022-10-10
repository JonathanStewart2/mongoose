'use strict';

const { movieModel } = require("./movies.js");
const { actorModel } = require("./movies.js");
const { reviewModel } = require("./movies.js")

const router = require("express").Router()


router.get('/getAllMovies', (req,res,next) => movieModel.find()
.then(results => res.send(results))
.catch(err => next(err))
);

router.get('/getAllActors', (req,res,next) => actorModel.find()
.then(results => res.send(results))
.catch(err => next(err))
);



router.get('/findMovie/:id', (req,res,next) => {
    const id = req.params.id;
    movieModel.find({id})
    .then(results => res.send(results))
    .catch(err => next(err))
})

router.get('/findActor/:id', (req,res,next) => {
    const id = req.params.id;
    actorModel.find({id})
    .then(results => res.send(results))
    .catch(err => next(err))
})

router.post('/addMovie', (req,res,next) => {
    //if (!req.body.title) return next({ status: 400, message: "Invalid body"});
    movieModel.init();
    const movie = new movieModel({
        title: req.body.title,
        description: req.body.description,
        releaseDate: req.body.releaseDate,
        actors: req.body.actors     
        })
        movie.save().then((data)=>{
            console.log('save data: ',data)
        })
    // movieModel.create(req.body)
    // .then(results => res.status(201).send(results))
    // .catch(err => next(err))
});

router.post('/addActor', (req,res,next) => {
    //if (!req.body.name) return next({ status: 400, message: "Invalid body"});
    console.log(req.body.name);
    actorModel.create(req.body)
    .then(results => res.status(201).send(results))
    .catch(err => next(err))
});
    


// TO BE CHANGED



router.delete('/delete/:id', (req, res) => {
    const id = req.params.id;
    console.log(`Deleting pokemon with ID: ${id}`);
    let removed = pokemon.splice(id, 1);
    console.log(`Remaining Pokemon: ${pokemon}`);
    res.send(`${removed} was deleted!`);
})



router.put('/replace/:id', (req, res) => {
    const id = req.params.id;
    const name = req.query.name;
    console.log(id, name);
    pokemon[id] = name;
    console.log(`${name} added to Pokemon.`);
    console.log(pokemon);
    res.send(pokemon)
})


module.exports = router;