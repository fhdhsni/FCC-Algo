/* eslint max-len: 0 */
const updateInventory = require("../312_updateInventory.js");
const assert = require("chai").assert;

describe("312_updateInventory", () => {
  it("https://www.freecodecamp.com/challenges/inventory-update", () => {
    function deepClone(array) {
      return JSON.parse(JSON.stringify(array));
    }
    const curInv = [
      [21, "Bowling Ball"],
      [2, "Dirty Sock"],
      [1, "Hair Pin"],
      [5, "Microphone"],
    ];
    const newInv = [
      [2, "Hair Pin"],
      [3, "Half-Eaten Apple"],
      [67, "Bowling Ball"],
      [7, "Toothpaste"],
    ];

    assert.isArray(updateInventory(deepClone(curInv), deepClone(newInv)));
    assert.lengthOf(updateInventory(deepClone(curInv), deepClone(newInv)), 6);
    assert.deepEqual(updateInventory(deepClone(curInv), deepClone(newInv)),
                     [[88, "Bowling Ball"], [2, "Dirty Sock"], [3, "Hair Pin"], [3, "Half-Eaten Apple"], [5, "Microphone"], [7, "Toothpaste"]]);
    assert.deepEqual(updateInventory(deepClone(curInv), []), deepClone(curInv));
    assert.deepEqual(updateInventory([], deepClone(newInv)), [[67, "Bowling Ball"], [2, "Hair Pin"], [3, "Half-Eaten Apple"], [7, "Toothpaste"]]);
    assert.deepEqual(updateInventory([[0, "Bowling Ball"], [0, "Dirty Sock"], [0, "Hair Pin"], [0, "Microphone"]], [[1, "Hair Pin"], [1, "Half-Eaten Apple"], [1, "Bowling Ball"], [1, "Toothpaste"]]),
                     [[1, "Bowling Ball"], [0, "Dirty Sock"], [1, "Hair Pin"], [1, "Half-Eaten Apple"], [0, "Microphone"], [1, "Toothpaste"]]);
  });
});
