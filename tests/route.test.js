'use strict';

const chai = require("chai");
const chaiHttp = require("chai-http");
chai.use(chaiHttp);
const server = require("../index");
const { actorModel } = require("../movies.js");
const { movieModel } = require("../movies.js")


describe("Actor/Movie Route Testing", () => {
    let testActor;
    let testMovie;

    beforeEach(async () => {
        try {
            await actorModel.deleteMany({});
            testActor = await actorModel.create({
                name: "James McAvoy"
            });
            testActor = JSON.parse(JSON.stringify(testActor));

        } catch (err) {
            console.error(err)
        }
        try {
            await movieModel.deleteMany({});
            testMovie = await movieModel.create({
                "title": "Inception",
                "description": "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O., but his tragic past may doom the project and his team to disaster.",
                "releaseDate": "2010-01-01T00:00:00.000Z"
            });
            testMovie = JSON.parse(JSON.stringify(testMovie));
        } catch (err) {
            console.error(err)
        }
    })


    it("should create an actor", (done) => {
        const newActor = {
            "name": "James McAvoy"
        }
        chai.request(server).post("/addActor").send(newActor).end((err, res) => {
            chai.expect(err).to.be.null;
            chai.expect(res.status).to.equal(201);
            chai.expect(res.body).to.include(newActor);
            done();
        })
    })
    it("should create a new movie", (done) => {
        const newMovie = {
            "title": "The Revenant",
            "description": "A frontiersman on a fur trading expedition in the 1820s fights for survival after being mauled by a bear and left for dead by members of his own hunting team.",
            "releaseDate": "2013-01-01T00:00:00.000Z"
        }
        chai.request(server).post("/addMovie").send(newMovie).end((err, res) => {
            chai.expect(err).to.be.null;
            chai.expect(res.status).to.equal(201);
            chai.expect(res.body).to.include(newMovie);
            done();
        })
    })
    it("should update James McAvoy to Michael Fassbender", (done) => {
        const updateActor = {
            "name": "Michael Fassbender"
        }
        chai.request(server).patch(`/updateActor/${testActor._id}`).send(updateActor).end((err, res) => {
            chai.expect(err).to.be.null;
            chai.expect(res.status).to.equal(200);
            chai.expect(res.body).to.deep.include(updateActor);
            done();
        })
    })
    it("should update Inception to The Revenant", (done) => {
        const updateMovie = {
            "title": "The Revenant",
            "description": "A frontiersman on a fur trading expedition in the 1820s fights for survival after being mauled by a bear and left for dead by members of his own hunting team.",
            "releaseDate": "2013-01-01T00:00:00.000Z"
        }
        chai.request(server).patch(`/updateMovies/${testMovie._id}`).send(updateMovie).end((err,res) => {
            chai.expect(err).to.be.null;
            chai.expect(res.status).to.equal(200);
            chai.expect(res.body).to.deep.include(updateMovie);
            done();
        })
    })
    it("should get the test actor", (done) => {
        chai.request(server).get(`/findActor/${testActor._id}`).end((err,res) => {
            chai.expect(err).to.be.null;
            chai.expect(res.status).to.equal(200);
            chai.expect(res.body).to.deep.include(testActor);
            done();
        })
    })
    it("should get the test movie", (done) => {
        chai.request(server).get(`/findMovie/${testMovie._id}`).end((err,res) => {
            chai.expect(err).to.be.null;
            chai.expect(res.status).to.equal(200);
            chai.expect(res.body).to.deep.include(testMovie);
            done();
        })
    })
    it("should delete the test Actor", (done) => {
        chai.request(server).delete(`/deleteActor/${testActor._id}`).end((err,res) => {
            chai.expect(err).to.be.null;
            chai.expect(res.status).to.equal(201);
            chai.expect(res.body).to.deep.include(testActor);
            done();
        })
    })
    it("should delete the test Movie", (done) => {
        chai.request(server).delete(`/deleteMovie/${testMovie._id}`).end((err,res) => {
            chai.expect(err).to.be.null;
            chai.expect(res.status).to.equal(201);
            chai.expect(res.body).to.deep.include(testMovie);
            done();
        })
    })
})




