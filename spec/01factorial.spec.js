var expect = require("chai").expect;
var factorial = require("../01factorial.js");

describe("factorial()", function() {
  it("is a function", function() {
    expect(factorial).to.be.a("function");
  });
  it("returns a number", function() {
    expect(factorial(3)).to.be.a("number");
  });
  it("returns the factorial of positive numbers", function() {
    expect(factorial(5)).to.equal(120);
    expect(factorial(8)).to.equal(40320);
    expect(factorial(1)).to.equal(1);
  });
  it("returns 0 for numbers below 0", function() {
    expect(factorial(-5)).to.equal(0);
  });
});