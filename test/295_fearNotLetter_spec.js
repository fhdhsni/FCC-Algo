const fearNotLetter = require("../295_fearNotLetter.js");
const assert = require("chai").assert;

describe("295_fearNotLetter", () => {
  it("Find the missing letter in the passed letter range and return it.", () => {
    assert.equal(fearNotLetter("abce"), "d");
    assert.equal(fearNotLetter("abcdefghjklmno"), "i");
    assert.equal(fearNotLetter("bcd"), undefined);
    assert.equal(fearNotLetter("yz"), undefined);
  });
});
