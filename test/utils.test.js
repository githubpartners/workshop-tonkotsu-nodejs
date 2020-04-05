var assert = require("assert");
var utils = require("../lib/utils");

var mochaAsync = fn => {
  return done => {
    fn.call().then(done, err => {
      done(err);
    });
  };
};

describe("Utils", function() {
  describe("greetings", function() {
    it("Says Hello World", function() {
      assert.equal(utils.greetings("World"), "Hello World - HAHAA 👋👋");
    });

    it("Throws on missing params", function() {
      assert.throws(() => {
        utils.greetings();
      }, Error);
    });

    it("Throws on empty string", function() {
      assert.throws(() => {
        utils.greetings("");
      }, Error);
    });

    it("Does not throw on a valid string", function() {
      assert.doesNotThrow(() => {
        utils.greetings("Valid!");
      }, Error);
    });
  });



  describe("fetchQuote", function() {
    it(
      "returns a nice msg",
      mochaAsync(async () => {
        const msg = await utils.fetchQuote();
        assert.equal(msg, "Hey there bud");
      })
    );
  });
});
