var expect = require("chai").expect;
var maxarray = require("../09maxarray.js");

xdescribe("maxarray()", function() {
  it("is a function", function() {
    expect(maxarray).to.be.a("function");
  });
  it("returns a number", function() {
    expect(maxarray([1,2])).to.be.a("number");
  });
  it("returns the sum of the input's digits", function() {
    expect(maxarray([1,2,3,4,5])).to.equal(5);
  });
});