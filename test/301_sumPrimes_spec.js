const sumPrimes = require("../301_sumPrimes.js");
const assert = require("chai").assert;

describe("301_sumPrimes", () => {
  it("sum all the prime numbers up to and including the provided numbe", () => {
    assert.isNumber(sumPrimes(10));
    assert.equal(sumPrimes(10), 17);
    assert.equal(sumPrimes(977), 73156);
  });
});
