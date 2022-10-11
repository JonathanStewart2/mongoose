'use strict';

const express = require("express");
const app = express();
const routes = require("./route.js");
const bodyParser = require('body-parser')
app.use(bodyParser.json());


const logger = (req,res,next) => {
    console.log(`Request received at: ${new Date()}`);
    next()
}

app.use(routes, logger);

app.use((err,req,res,next) => {
    console.log(err);
    res.status(err.status || 500).send(err.message || `Unknown error`);
    next();
})


//Reverse Factorial Problem
const factorial = (n) => {
    let number = n;
    let start = 2;
    let count = 0
    while (number > 1){
        if (number%start !== 0){
            return "None"
        } else {
            number = number/start
            start++
            count++
        }
    }
    return count
}

console.log(`factorial of 120 is ${factorial(120)}!`)





const server = app.listen(4417, () => {
    console.log(`Server started succesfully on port ${server.address().port}`);
})


