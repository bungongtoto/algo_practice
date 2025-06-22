const mergeSort = (arr) => {
  const length = arr.length;
  //base case if single element
  if (length === 1) {
    return arr;
  }

  const mid = Math.floor(length / 2);
  const leftArray = arr.slice(0, mid);
  const rightArray = arr.slice(mid, length);

  return merge(mergeSort(leftArray), mergeSort(rightArray));
};

const merge = (leftArray, rightArray) => {
  const sortedArray = [];

  while (leftArray.length > 0 && rightArray.length > 0) {
    if (leftArray[0] < rightArray[0]) {
      sortedArray.push(leftArray.shift());
    } else {
      sortedArray.push(rightArray.shift());
    }
  }

  return [...sortedArray, ...leftArray, ...rightArray];
};

module.exports = mergeSort;
