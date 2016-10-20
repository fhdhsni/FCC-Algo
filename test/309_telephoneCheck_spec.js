const telephoneCheck = require("../309_telephoneCheck.js");
const assert = require("chai").assert;

describe("309_telephoneCheck", () => {
  it("https://www.freecodecamp.com/challenges/validate-us-telephone-numbers", () => {
    assert.isBoolean(telephoneCheck("555-555-5555"));

    assert.isTrue(telephoneCheck("1 555-555-5555"));
    assert.isTrue(telephoneCheck("1 (555) 555-5555"));
    assert.isTrue(telephoneCheck("5555555555"));
    assert.isTrue(telephoneCheck("555-555-5555"));
    assert.isTrue(telephoneCheck("(555)555-5555"));
    assert.isTrue(telephoneCheck("1(555)555-5555"));
    assert.isTrue(telephoneCheck("1 555 555 5555"));
    assert.isTrue(telephoneCheck("1 456 789 4444"));

    assert.isFalse(telephoneCheck("555-5555"));
    assert.isFalse(telephoneCheck("5555555"));
    assert.isFalse(telephoneCheck("1 555)555-5555"));
    assert.isFalse(telephoneCheck("123**&!!asdf#"));
    assert.isFalse(telephoneCheck("55555555"));
    assert.isFalse(telephoneCheck("(6505552368)"));
    assert.isFalse(telephoneCheck("2 (757) 622-7382"));
    assert.isFalse(telephoneCheck("0 (757) 622-7382"));
    assert.isFalse(telephoneCheck("-1 (757) 622-7382"));
    assert.isFalse(telephoneCheck("2 757 622-7382"));
    assert.isFalse(telephoneCheck("10 (757) 622-7382"));
    assert.isFalse(telephoneCheck("27576227382"));
    assert.isFalse(telephoneCheck("(275)76227382"));
    assert.isFalse(telephoneCheck("2(757)6227382"));
    assert.isFalse(telephoneCheck("2(757)622-7382"));
    assert.isFalse(telephoneCheck("555)-555-5555"));
    assert.isFalse(telephoneCheck("(555-555-5555"));
    assert.isFalse(telephoneCheck("(555)5(55?)-5555"));
  });
});
