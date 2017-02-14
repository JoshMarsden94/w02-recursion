var expect = require("chai").expect;
var palindrome = require("../05palindrome.js");

describe("palindrome()", function() {
  it("is a function", function() {
    expect(palindrome).to.be.a("function");
  });
  it("returns a number", function() {
    expect(palindrome("h")).to.be.a("boolean");
  });
  it("returns true only if the word is a palindrome", function() {
    expect(palindrome("aha")).to.equal(true);
    expect(palindrome("word")).to.equal(false);
    expect(palindrome("qwertytrewq")).to.equal(true);
  });
});