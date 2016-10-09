const smallestCommons = require("../302_smallestCommons.js");
const assert = require("chai").assert;

describe("302_smallestCommons", () => {
  it("https://www.freecodecamp.com/challenges/smallest-common-multiple", () => {
    assert.isNumber(smallestCommons([1, 5]));
    assert.equal(smallestCommons([1, 5]), 60);
    assert.equal(smallestCommons([5, 1]), 60);
    assert.equal(smallestCommons([1, 13]), 360360);
    assert.equal(smallestCommons([23, 18]), 6056820);
  });
});
