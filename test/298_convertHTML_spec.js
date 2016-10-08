const convertHTML = require("../298_convertHTML.js");
const assert = require("chai").assert;

describe("298_convertHTML", () => {
  it("Convert &, <, >, \", and ', in a string to their corresponding HTML entities.", () => {
    assert.equal(convertHTML("Dolce & Gabbana"),
                 "Dolce &amp; Gabbana");
    assert.equal(convertHTML("Hamburgers < Pizza < Tacos"),
                 "Hamburgers &lt; Pizza &lt; Tacos");
    assert.equal(convertHTML("Sixty > twelve"),
                 "Sixty &gt; twelve");
    assert.equal(convertHTML("Stuff in \"quotation marks\""),
                 "Stuff in &quot;quotation marks&quot;");
    assert.equal(convertHTML("Shindler's List"),
                 "Shindler&apos;s List");

    assert.equal(convertHTML("<>"),
                 "&lt;&gt;");
    assert.equal(convertHTML("abc"),
                 "abc");
  });
});
