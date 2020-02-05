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
      assert.equal(utils.greetings("World"), "Hello World 👋👋");
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

  describe("makeHeading", function() {
    it("wraps the string in a H1", function() {
      assert.equal(utils.makeHeading("Title"), "<h1>Title</h1>");
    });

    // it("trims any excess padding", function() {
    //   const out = utils.makeHeading(" Title with padding   ");
    //   assert.equal(out, "<h1>Title with padding</h1>");
    // });

    // it("returns empty string on missing argument", function() {
    //   assert.equal(utils.makeHeading(), "");
    // });
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
