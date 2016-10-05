const convertToRoman = require("../290_convertToRoman.js");
const assert = require("chai").assert;

describe("290_convertToRoman", () => {
  it("Convert the given number into a roman numeral.", () => {
    assert.equal(convertToRoman(2), "II");
    assert.equal(convertToRoman(3), "III");
    assert.equal(convertToRoman(4), "IV");
    assert.equal(convertToRoman(5), "V");
    assert.equal(convertToRoman(9), "IX");
    assert.equal(convertToRoman(12), "XII");
    assert.equal(convertToRoman(16), "XVI");
    assert.equal(convertToRoman(29), "XXIX");
    assert.equal(convertToRoman(44), "XLIV");
    assert.equal(convertToRoman(45), "XLV");
    assert.equal(convertToRoman(68), "LXVIII");
    assert.equal(convertToRoman(83), "LXXXIII");
    assert.equal(convertToRoman(97), "XCVII");
    assert.equal(convertToRoman(99), "XCIX");
    assert.equal(convertToRoman(500), "D");
    assert.equal(convertToRoman(501), "DI");
    assert.equal(convertToRoman(649), "DCXLIX");
    assert.equal(convertToRoman(798), "DCCXCVIII");
    assert.equal(convertToRoman(891), "DCCCXCI");
    assert.equal(convertToRoman(1000), "M");
    assert.equal(convertToRoman(1004), "MIV");
    assert.equal(convertToRoman(1006), "MVI");
    assert.equal(convertToRoman(1023), "MXXIII");
    assert.equal(convertToRoman(2014), "MMXIV");
    assert.equal(convertToRoman(3999), "MMMCMXCIX");
  });
});
