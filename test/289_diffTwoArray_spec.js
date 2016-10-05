const diffArray = require("../289_diffTwoArrays.js");
const assert = require("chai").assert;

describe("289_diffTwoArrays", () => {
  it("return a new array with any items only found in one of the two given arrays", () => {
    assert.isArray(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));
    assert.sameMembers(
      diffArray(
      ["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"],
      ["diorite", "andesite", "grass", "dirt", "dead shrub"]),
      ["pink wool"]);
    assert.sameMembers(
      diffArray(
        ["andesite", "grass", "dirt", "pink wool", "dead shrub"],
        ["diorite", "andesite", "grass", "dirt", "dead shrub"]),
      ["diorite", "pink wool"]);
    assert.sameMembers(
      diffArray(
        ["andesite", "grass", "dirt", "dead shrub"],
        ["andesite", "grass", "dirt", "dead shrub"]),
      []);

    assert.equal(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]), 4);
    assert.sameMembers(diffArray([1, "calf", 3, "piglet"], [1, "calf", 3, 4]), ["piglet", 4]);
    assert.sameMembers(diffArray([], ["snuffleupagus", "cookie monster", "elmo"]),
                 ["snuffleupagus", "cookie monster", "elmo"]);
    assert.sameMembers(diffArray([1, "calf", 3, "piglet"], [7, "filly"]),
                 [1, "calf", 3, "piglet", 7, "filly"]);
  });
});
