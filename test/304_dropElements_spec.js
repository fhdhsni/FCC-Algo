const dropElements = require("../304_dropElements.js");
const assert = require("chai").assert;

describe("304_dropElements", () => {
  it("https://www.freecodecamp.com/challenges/drop-it", () => {
    assert.deepEqual(dropElements([1, 2, 3, 4], n => n >= 3), [3, 4]);
    assert.deepEqual(dropElements([0, 1, 0, 1], n => n === 1), [1, 0, 1]);
    assert.deepEqual(dropElements([1, 2, 3], n => n > 0), [1, 2, 3]);
    assert.deepEqual(dropElements([1, 2, 3, 4], n => n > 5), []);
    assert.deepEqual(dropElements([1, 2, 3, 7, 4], n => n > 3), [7, 4]);
    assert.deepEqual(dropElements([1, 2, 3, 9, 2], n => n > 2), [3, 9, 2]);
  });
});
