const myReplace = require("../292_myReplace.js");
const assert = require("chai").assert;

describe("292_myReplace.js", () => {
  it("Performs a search and replace on the sentence using the arguments provided", () => {
    assert.equal(myReplace("Let us go to the store", "store", "mall"),
                 "Let us go to the mall");

    assert.equal(myReplace("He is Sleeping on the couch", "Sleeping", "sitting"),
                 "He is Sitting on the couch");

    assert.equal(myReplace("This has a spellngi error", "spellngi", "spelling"),
                 "This has a spelling error");

    assert.equal(myReplace("His name is Tom", "Tom", "john"),
                 "His name is John");

    assert.equal(myReplace("Let us get back to more Coding", "Coding", "algorithms"),
                 "Let us get back to more Algorithms");
  });
});
