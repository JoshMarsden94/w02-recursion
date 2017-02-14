var expect = require("chai").expect;
var reverse = require("../07reverse.js");

describe("reverse()", function() {
  it("is a function", function() {
    expect(reverse).to.be.a("function");
  });
  it("returns a string", function() {
    expect(reverse("h")).to.be.a("string");
  });
  it("returns the reverse", function() {
    expect(reverse("hello")).to.equal("olleh");
    expect(reverse("function")).to.equal("noitcnuf");
    expect(reverse("HI!")).to.equal("!IH");
  });
});