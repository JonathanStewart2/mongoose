
const doggo = require("../doggo.js");
const { expect } = require("chai");

describe("Doggo Testing", () => {         // set of tests
    it("should result in None", () => {         //single test
        expect(doggo(101)).to.equal("None");
    })
    it("should result in None", () => {
        expect(doggo(0.3)).to.equal("None");
    })
    it("should result in None", () => {
        expect(doggo("serg")).to.equal("None");
    })
    it("should result in None", () => {
        expect(doggo(false)).to.equal("None");
    })
    it("should result in 99", () => {
        expect(doggo(5).length).to.equal(99);
    })
    it("should result in 4th", () => {
        expect(doggo(5)[3]).to.equal("4th");
    })
    it("should result in 6th", () => {
        expect(doggo(5)[4]).to.equal("6th");
    })
})