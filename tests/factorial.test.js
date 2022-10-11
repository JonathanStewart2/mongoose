
const factFunct = require("../factorial.js");
const { expect } = require("chai");

describe("Factorial Testing", () => {         // set of tests
    it("should result in 5", () => {         //single test
        expect(factFunct(120)).to.equal(5);
    })
    it("should result in None", () => {
        expect(factFunct(500)).to.equal("None");
    })
    it("should result in 6", () => {
        expect(factFunct(720)).to.equal(6);
    })
    it("should result in None", () => {
        expect(factFunct(1234)).to.equal("None");
    })
    it("should result in 21", () => {
        expect(factFunct(51090942171709440000)).to.equal(21);
    })
    it("should result in None", () => {
        expect(factFunct(25.5)).to.equal("None");
    })
    it("should result in None", () => {
        expect(factFunct(0)).to.equal("None");
    })
    it("should result in None", () => {
        expect(factFunct("dfg")).to.equal("None");
    })
})