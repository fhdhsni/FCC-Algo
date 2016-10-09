const steamrollArray = require("../305_steamrollArray.js");
const assert = require("chai").assert;

describe("305_steamrollArray", () => {
  it("https://www.freecodecamp.com/challenges/steamroller", () => {
    assert.deepEqual(steamrollArray([[["a"]], [["b"]]]), ["a", "b"]);
    assert.deepEqual(steamrollArray([1, [2], [3, [[4]]]]), [1, 2, 3, 4]);
    assert.deepEqual(steamrollArray([1, [], [3, [[4]]]]), [1, 3, 4]);
    assert.deepEqual(steamrollArray([1, {}, [3, [[4]]]]), [1, {}, 3, 4]);
  });
});
