function getOutlierValue(arr) {
  // 1. Compute total sum S
  const S = arr.reduce((sum, x) => sum + x, 0);

  // 2. Build a frequency map
  const freq = {};
  for (const x of arr) {
    freq[x] = (freq[x] || 0) + 1;
  }

  const potential = [];

  // 3. Test each element x as a candidate outlier
  for (const x of arr) {
    const remainder = S - x;

    // 4. remainder must be even to split in two equal parts
    if (remainder % 2 === 0) {
      const half = remainder / 2;

      // 5. Temporarily “remove” x from the freq map
      freq[x]--;
      if (freq[x] === 0) delete freq[x];

      // 6. If half still exists, x qualifies
      if (freq[half] > 0) {
        potential.push(x);
      }

      // 7. Restore x for the next iteration
      freq[x] = (freq[x] || 0) + 1;
    }
  }

  // 8. Return the largest valid outlier
  return Math.max(...potential);
}

console.log(getOutlierValue([4, 1, 3, 16, 10, 2]));
