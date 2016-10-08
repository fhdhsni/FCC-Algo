const sumFibs = require("../300_sumFibs.js");
const assert = require("chai").assert;

describe("300_sumFibs", () => {
  it("return the sum of all odd Fibonacci numbers that are less than or equal to num", () => {
    assert.isNumber(sumFibs(1));
    assert.equal(sumFibs(1000), 1785);
    assert.equal(sumFibs(4000000), 4613732);
    assert.equal(sumFibs(4), 5);
    assert.equal(sumFibs(75024), 60696);
    assert.equal(sumFibs(75025), 135721);
  });
});
