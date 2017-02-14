var expect = require("chai").expect;
var sumdigits = require("../06sumdigits.js");

describe("sumdigits()", function() {
  it("is a function", function() {
    expect(sumdigits).to.be.a("function");
  });
  it("returns a number", function() {
    expect(sumdigits(1)).to.be.a("number");
  });
  it("returns the sum of the input's digits", function() {
    expect(sumdigits(1)).to.equal(1);
    expect(sumdigits(3)).to.equal(3);
    expect(sumdigits(23)).to.equal(5);
    expect(sumdigits(612)).to.equal(9);
    expect(sumdigits(54321)).to.equal(15);
  });
});