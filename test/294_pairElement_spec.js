const pairElement = require("../294_pairElement.js");
const assert = require("chai").assert;

describe("294_pairElement", () => {
  it("takes each character, get its pair, and return the results as a 2d array.", () => {
    assert.deepEqual(pairElement("ATCGA"),
                     [["A", "T"], ["T", "A"], ["C", "G"], ["G", "C"], ["A", "T"]]);
    assert.deepEqual(pairElement("TTGAG"),
                     [["T", "A"], ["T", "A"], ["G", "C"], ["A", "T"], ["G", "C"]]);
    assert.deepEqual(pairElement("CTCTA"),
                     [["C", "G"], ["T", "A"], ["C", "G"], ["T", "A"], ["A", "T"]]);
  });
});
