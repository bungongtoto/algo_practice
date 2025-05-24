const swap = (list, a, b) => {
  [list[a], list[b]] = [list[b], list[a]];
};

const bubbleSort = (input) => {
  let hasSwapped = true;
  while (hasSwapped) {
    hasSwapped = false;
    for (let i = 0; i < input.length; i++) {
      if (input[i] > input[i + 1]) {
        swap(input, i, i + 1);
        hasSwapped = true;
      }
    }
  }

  return input;
};

module.exports = bubbleSort;
