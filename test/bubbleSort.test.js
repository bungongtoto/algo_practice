const bubbleSort = require("../bubble sort/bubbleSort.js");
const assert = require("assert");

describe("bubbleSort", () => {
  it("sorts array", () => {
    const input = [1, 7, 0, 2, 5];
    const expected = [0, 1, 2, 5, 7];

    result = bubbleSort(input);

    assert.deepEqual(result, expected);
  });
});
