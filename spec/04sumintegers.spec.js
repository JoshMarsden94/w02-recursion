var expect = require("chai").expect;
var sumIntegers = require("../04sumintegers.js");

describe("sumIntegers()", function() {
  it("is a function", function() {
    expect(sumIntegers).to.be.a("function");
  });
  it("returns a number", function() {
    expect(sumIntegers(3)).to.be.a("number");
  });
  it("returns the sumIntegers of positive numbers", function() {
    expect(sumIntegers(5)).to.equal(15);
    expect(sumIntegers(2)).to.equal(3);
    expect(sumIntegers(8)).to.equal(36);
  });
  it("returns 0 for numbers below 0", function() {
    expect(sumIntegers(-5)).to.equal(0);
  });
});