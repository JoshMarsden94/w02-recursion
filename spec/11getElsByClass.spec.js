var expect = require("chai").expect;
var getElsByClass = require("../11getElsByClass.js");
var jsdom = require('jsdom');

describe("getElsByClass()", function() {
  it("is a function", function() {
    expect(getElsByClass).to.be.a("function");
  });
  it('works', function () {
      expect(getElsByClass("html")).to.equal("html");
  });
});

