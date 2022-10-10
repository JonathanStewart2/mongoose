'use strict';

const express = require("express");
const app = express();
const routes = require("./route.js");
const bodyParser = require('body-parser')


const logger = (req,res,next) => {
    console.log(`Request received at: ${new Date()}`);
    next()
}

app.use(routes, logger);


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
