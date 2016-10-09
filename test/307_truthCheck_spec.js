const truthCheck = require("../307_truthCheck.js");
const assert = require("chai").assert;

describe("307_truthCheck", () => {
  it("https://www.freecodecamp.com/challenges/everything-be-true", () => {
    assert.strictEqual(truthCheck([{ user: "Tinky-Winky", sex: "male" },
                                   { user: "Dipsy", sex: "male" },
                                   { user: "Laa-Laa", sex: "female" },
                                   { user: "Po", sex: "female" }], "sex"), true);

    assert.strictEqual(truthCheck([{ user: "Tinky-Winky", sex: "male" },
                                   { user: "Dipsy" },
                                   { user: "Laa-Laa", sex: "female" },
                                   { user: "Po", sex: "female" }],
                                  "sex"), false);

    assert.strictEqual(truthCheck([{ user: "Tinky-Winky", sex: "male", age: 0 },
                                   { user: "Dipsy", sex: "male", age: 3 },
                                   { user: "Laa-Laa", sex: "female", age: 5 },
                                   { user: "Po", sex: "female", age: 4 }],
                                  "age"), false);

    assert.strictEqual(truthCheck([{ name: "Pete", onBoat: true },
                                   { name: "Repeat", onBoat: true },
                                   { name: "FastFoward", onBoat: null }],
                                  "onBoat"), false);

    assert.strictEqual(truthCheck([{ name: "Pete", onBoat: true },
                                   { name: "Repeat", onBoat: true, alias: "Repete" },
                                   { name: "FastFoward", onBoat: true }],
                                  "onBoat"), true);

    assert.strictEqual(truthCheck([{ single: "yes" }],
                                  "single"), true);

    assert.strictEqual(truthCheck([{ single: "" },
                                   { single: "double" }],
                                  "single"), false);

    assert.strictEqual(truthCheck([{ single: "double" },
                                   { single: undefined }],
                                  "single"), false);

    assert.strictEqual(truthCheck([{ single: "double" },
                                   { single: NaN }],
                                  "single"), false);
  });
});
