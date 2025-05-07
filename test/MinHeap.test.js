const assert = require("assert");
const MinHeap = require("../heaps/MinHeap");

const minHeap = new MinHeap();
for (let i = 10000; i > 0; i--) {
  minHeap.add(i);
}


// console.log(minHeap.heap)

describe("MinHeap", () => {
  it("returns min value of minimum heap", async () => {
    //setup
    const minValue = 1;

    //exercise
    const popVal = await minHeap.popMin();

    //verify
    assert.ok(popVal === minValue);
  });

  it("returns min value of minimum heap after first pop", async () => {
    //setup
    const minValue = 2;

    //exercise
    const popVal = await minHeap.popMin();

    //verify
    assert.ok(popVal === minValue);
  });
});
