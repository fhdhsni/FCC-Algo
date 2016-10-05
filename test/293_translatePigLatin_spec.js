const translatePigLatin = require("../293_translatePigLatin.js");
const assert = require("chai").assert;

describe("translatePigLatin", () => {
  it("Translate the provided string to pig latin.", () => {
    assert.equal(translatePigLatin("california"), "aliforniacay");
    assert.equal(translatePigLatin("paragraphs"), "aragraphspay");
    assert.equal(translatePigLatin("glove"), "oveglay");
    assert.equal(translatePigLatin("algorithm"), "algorithmway");
    assert.equal(translatePigLatin("eight"), "eightway");
  });
});
