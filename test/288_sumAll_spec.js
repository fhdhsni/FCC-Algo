const sumAll = require("../288_sumAll.js");
const assert = require("chai").assert;

describe("288_sumAll", () => {
  it("given an array of two numbers, it returns sum of those numbers and all in between", () => {
    assert.isNumber(sumAll([1, 4]), "should return a number");
    assert.equal(sumAll([1, 4]), 10, "oops");
    assert.equal(sumAll([4, 1]), 10, "oops");
    assert.equal(sumAll([5, 10]), 45, "oops");
    assert.equal(sumAll([10, 5]), 45, "oops");
  });
});
