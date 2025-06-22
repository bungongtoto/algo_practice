const quickSort = require("../quick sort/quickSort.js");
const assert = require("assert");

describe("quick sort", () => {
  it("sorts array", () => {
    const input = [1, 7, 0, 2, 5];
    const expected = [0, 1, 2, 5, 7];

    result = quickSort(input);

    assert.deepEqual(result, expected);
  });
});
