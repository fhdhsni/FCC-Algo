const uniteUnique = require("../297_uniteUnique.js");
const assert = require("chai").assert;

describe("297_uniteUnique", () => {
  it("returns a new array of unique values in the order of the original provided arrays.", () => {
    assert.deepEqual(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]),
                     [1, 3, 2, 5, 4]);
    assert.deepEqual(uniteUnique([1, 3, 2], [1, [5]], [2, [4]]),
                     [1, 3, 2, [5], [4]]);
    assert.deepEqual(uniteUnique([1, 2, 3], [5, 2, 1]),
                     [1, 2, 3, 5]);
    assert.deepEqual(uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]),
                     [1, 2, 3, 5, 4, 6, 7, 8]);
  });
});
