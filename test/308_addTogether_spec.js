const addTogether = require("../308_addTogether.js");
const assert = require("chai").assert;

describe.only("308_addTogether", () => {
  it("https://www.freecodecamp.com/challenges/arguments-optional", () => {
    assert.strictEqual(addTogether(2, 3), 5);
    assert.strictEqual(addTogether(2)(3), 5);
    assert.strictEqual(addTogether("http://bit.ly/IqT6zt"), undefined);
    assert.strictEqual(addTogether(2, "3"), undefined);
    assert.strictEqual(addTogether(2)([3]), undefined);
  });
});
