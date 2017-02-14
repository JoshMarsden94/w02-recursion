var expect = require("chai").expect;
var whiteSpaces = require("../03whitespaces.js");

describe("whiteSpaces()", function() {
  it("is a function", function() {
    expect(whiteSpaces).to.be.a("function");
  });
  it("returns a number", function() {
    expect(whiteSpaces("hi")).to.be.a("number");
  });
  it("returns the whiteSpaces of positive numbers", function() {
    expect(whiteSpaces("hello world")).to.equal(1);
    expect(whiteSpaces("testing my javascript code")).to.equal(3);
  });
});