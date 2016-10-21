const sym = require("../310_sym.js");
const assert = require("chai").assert;

describe("310_sym", () => {
  it("https://www.freecodecamp.com/challenges/symmetric-difference", () => {
    assert.sameMembers(sym([1, 2, 3], [5, 2, 1, 4]), [3, 4, 5]);
    assert.lengthOf(sym([1, 2, 3], [5, 2, 1, 4]), 3);
    assert.sameMembers(sym([1, 2, 5], [2, 3, 5], [3, 4, 5]), [1, 4, 5]);
    assert.lengthOf(sym([1, 2, 5], [2, 3, 5], [3, 4, 5]), 3);
    assert.sameMembers(sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]), [1, 4, 5]);
    assert.lengthOf(sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]), 3);
    assert.sameMembers(sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3]),
                       [2, 3, 4, 6, 7]);
    assert.lengthOf(sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3]), 5);
    assert.
      sameMembers(sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1]),
      [1, 2, 4, 5, 6, 7, 8, 9]);
    assert.lengthOf(sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1])
                    , 8);
  });
});
