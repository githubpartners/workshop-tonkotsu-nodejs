var assert = require("assert");
var utils = require("../lib/utils");

var mochaAsync = fn => {
  return done => {
    fn.call().then(done, err => {
      done(err);
    });
  };
};

describe("For testing rule", function() {
  describe("hello", function() {
    it("Throw error", function() {
      assert.throws(() => {
        throw 'Error!';
      }, Error);
    });

  });

});
