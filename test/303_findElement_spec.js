const findElement = require("../303_findElement.js");
const assert = require("chai").assert;

describe("303_findElement_spec", () => {
  it("https://www.freecodecamp.com/challenges/finders-keepers", () => {
    assert.equal(findElement([1, 3, 5, 8, 9, 10], num => num % 2 === 0), 8);
    assert.equal(findElement([1, 3, 5, 9], num => num % 2 === 0), undefined);
  });
});
