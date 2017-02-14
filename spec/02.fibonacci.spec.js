var expect = require("chai").expect;
var fibonacci = require("../02fibonacci.js");

describe("fibonacci()", function() {
  it("is a function", function() {
    expect(fibonacci).to.be.a("function");
  });
  it("returns a number", function() {
    expect(fibonacci(3)).to.be.a("number");
  });
  it("returns the fibonacci of positive numbers", function() {
    expect(fibonacci(1)).to.equal(1);
    expect(fibonacci(6)).to.equal(8);
  });
  it("returns 0 for numbers below 0 or non-numbers", function() {
    expect(fibonacci(-5)).to.equal(0);
  });
});