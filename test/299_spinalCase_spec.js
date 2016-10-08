const spinalCase = require("../299_spinalCase.js");
const assert = require("chai").assert;

describe("299_spinalCase", () => {
  it("convert a string to spinal case", () => {
    assert.equal(spinalCase("This Is Spinal Tap"), "this-is-spinal-tap");
    assert.equal(spinalCase("thisIsSpinalTap"), "this-is-spinal-tap");
    assert.equal(spinalCase("The_Andy_Griffith_Show"), "the-andy-griffith-show");
    assert.equal(spinalCase("Teletubbies say Eh-oh"), "teletubbies-say-eh-oh");
    assert.equal(spinalCase("AllThe-small Things"), "all-the-small-things");
  });
});
