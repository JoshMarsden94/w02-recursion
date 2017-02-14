var expect = require("chai").expect;
var maxarray = require("../09maxarray.js");

describe("maxarray()", function() {
  it("is a function", function() {
    expect(maxarray).to.be.a("function");
  });
  it("returns a number", function() {
    expect(maxarray([1,2])).to.be.a("number");
  });
  it("returns the largest integer from array of numbers", function() {
    expect(maxarray([1,2,3,4,5])).to.equal(5);
    expect(maxarray([1,2,5,2,1])).to.equal(5);
    expect(maxarray([1,5,5,2,1])).to.equal(5);
  });
});