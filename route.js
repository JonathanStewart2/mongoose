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
    movieModel.create(req.body)
    .then(results => res.status(201).send(results))
    .catch(err => next(err))
});

router.post('/addActor', (req,res,next) => {
    actorModel.create(req.body)
    .then(results => res.status(201).send(results))
    .catch(err => next(err))
});

router.delete('/deleteActor/:id', (req, res, next) => {
    const id = req.params.id;
    actorModel.findByIdAndDelete(id)
    .then(results => res.status(201).send(results))
    .catch(err => next(err))
})

router.delete('/deleteMovie/:id', (req, res, next) => {
    const id = req.params.id;
    actorMovie.findByIdAndDelete(id)
    .then(results => res.status(201).send(results))
    .catch(err => next(err))
})

router.patch("/updateActor/:id", async (req,res,next) => {
    try {
        await actorModel.findByIdAndUpdate(req.params.id, req.body)
        const newModel = await actorModel.findById(req.params.id);
        console.log(newModel);
        res.send(newModel);
    } catch(err) {
        return next(err);
    }
})

// doesnt work as havent set _id to objectId
router.patch("/updateMovies/:id", async (req,res,next) => {
    try {
        await movieModel.findByIdAndUpdate(req.params.id, req.body)
        const newModel = await movieModel.findById(req.params.id);
        console.log(newModel);
        res.send(newModel);
    } catch(err) {
        return next(err);
    }
})
//63453411f92b3fd99e6b80c5 - review ID
// 634525137fe3e3a4959def8b -inception ID

router.post("/createReview", async (req,res,next) => {
    try { 
        const result = await reviewModel.create(req.body);
        res.status(201).send(result);
    } catch(err) {  
        return next(err);
    }   
})

//TODO: GET ASYNC WORKING
// router.patch("/updateActor/:id", async (req,res,next) => {
//     try {
//         await actorModel.findByIdAndUpdate(req.params.id, req.query)
//         const newModel = await actorModel.findById(req.params.id);
//         console.log(newModel);
//         res.send(newModel);
//     } catch(err) {
//         return next(err);
//     }
// })


module.exports = router;