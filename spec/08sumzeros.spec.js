var expect = require("chai").expect;
var sumzeros = require("../08sumzeros.js");

describe("sumzeros()", function() {
  it("is a function", function() {
    expect(sumzeros).to.be.a("function");
  });
  it("returns a number", function() {
    expect(sumzeros(0)).to.be.a("number");
  });
  it("returns the sum of the input's digits", function() {
    expect(sumzeros(34503)).to.equal(1);
    expect(sumzeros(3)).to.equal(0);
    expect(sumzeros(230)).to.equal(1);
    expect(sumzeros(100000)).to.equal(5);
  });
});