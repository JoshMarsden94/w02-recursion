var expect = require("chai").expect;
var stringifyjson = require("../10stringifyjson.js");

describe("stringifyjson()", function() {
  it("is a function", function() {
    expect(stringifyjson).to.be.a("function");
  })
  it("should return a string with double quotation mark format", function () {
    expect(stringifyjson('foo')).to.equal('\"foo\"');
  });
  it('should return an unaltered object', function () {
      expect(stringifyjson({})).to.equal('{}');
  });
  it('should return an unaltered boolean', function () {
      expect(stringifyjson(true)).to.equal(true);
  });
  it('should return an unaltered array', function () {
      expect(stringifyjson([])).to.equal('[]');
  });
  it('returns an unaltered number', function () {
      expect(stringifyjson(1)).to.equal(1);
  });
  it('returns a string of an array with the elements inside stringified', function () {
      var json = [1, true, {}, 'foo', []];
      var actual = stringifyjson(json);
      var expected = JSON.stringify(json);
      expect(actual).to.equal(expected);
  });
  it('returns a string of an object with the elements inside stringified', function () {
      var json = {x: 6, b: 8, c: 'hello', d: [], e: true, f: {}};
      var actual = stringifyjson(json);
      var expected = JSON.stringify(json);
      expect(actual).to.equal(expected);      
  });
});