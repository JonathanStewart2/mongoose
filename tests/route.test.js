'use strict';

const chai = require("chai");
const chaiHttp = require("chai-http");
chai.use(chaiHttp);
const server = require("../index");

describe("Actor/Movie Route Testing", () => {
    it("should create an actor", () =>{
        const newActor = { "name": "Liam Neeson"};
        chai.request(server).post("/addActor").send(newActor).end((err,res) => {
            chai.expect(err).to.be.null;
            chai.expect(res.status).to.equal(201);
            chai.expect(res.body).to.include(newActor)
        })
    })
})


