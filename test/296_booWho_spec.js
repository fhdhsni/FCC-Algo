const booWho = require("../296_booWho.js");
const assert = require("chai").assert;

describe("296_booWho", () => {
  it("check if a value is classified as a boolean primitive. Return true or false.", () => {
    assert.equal(booWho(true), true);
    assert.equal(booWho(false), true);
    assert.equal(booWho([].slice), false);
    assert.equal(booWho({ a: 1 }), false);
    assert.equal(booWho(1), false);
    assert.equal(booWho(NaN), false);
    assert.equal(booWho("a"), false);
  });
});
