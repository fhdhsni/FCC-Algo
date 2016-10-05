const whatIsInAName = require("../291_whatIsInAName.js");
const assert = require("chai").assert;

describe("291_whatIsInAName", () => {
  it("returns an array of all objects that have matching property and value pairs", () => {
    assert.deepEqual(whatIsInAName(
      [{ first: "Romeo", last: "Montague" },
       { first: "Mercutio", last: null },
       { first: "Tybalt", last: "Capulet" }],
      { last: "Capulet" }), [{ first: "Tybalt", last: "Capulet" }]);

    assert.deepEqual(whatIsInAName([{ a: 1 }, { a: 1 }, { a: 1, b: 2 }],
                                   { a: 1 }),
                     [{ a: 1 }, { a: 1 }, { a: 1, b: 2 }]);
    assert.deepEqual(whatIsInAName([{ a: 1, b: 2 }, { a: 1 }, { a: 1, b: 2, c: 2 }],
                                   { a: 1, b: 2 }),
                     [{ a: 1, b: 2 }, { a: 1, b: 2, c: 2 }]);
    assert.deepEqual(whatIsInAName([{ a: 1, b: 2 }, { a: 1 }, { a: 1, b: 2, c: 2 }],
                                   { a: 1, c: 2 }),
                     [{ a: 1, b: 2, c: 2 }]);
  });
});
