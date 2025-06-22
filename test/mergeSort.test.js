const mergeSort = require("../merge sort/mergeSort.js");
const assert = require("assert");

describe("mergeSort", () => {
  it("sorts array", () => {
    const input = [1, 7, 0, 2, 5];
    const expected = [0, 1, 2, 5, 7];

    result = mergeSort(input);

    assert.deepEqual(result, expected);
  });
});
