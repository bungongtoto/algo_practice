const quickSort = (array, leftBound = 0, rightBound = array.length - 1) => {
  if (leftBound < rightBound) {
    const pivotIndex = partition(array, leftBound, rightBound);
    quickSort(array, leftBound, pivotIndex - 1);
    quickSort(array, pivotIndex, rightBound);
  }
  return array;
};

const partition = (array, leftIndex, rigthIndex) => {
  const pivot = array[Math.floor((leftIndex + rigthIndex) / 2)];

  while (leftIndex <= rigthIndex) {
    while (array[leftIndex] < pivot) {
      leftIndex++;
    }

    while (array[rigthIndex] > pivot) {
      rigthIndex--;
    }

    if (leftIndex <= rigthIndex) {
      swap(array, leftIndex, rigthIndex);
      leftIndex++;
      rigthIndex--;
    }
  }

  return leftIndex;
};

const swap = (array, indexOne, indexTwo) => {
  const temp = array[indexTwo];
  array[indexTwo] = array[indexOne];
  array[indexOne] = temp;
};

module.exports = quickSort;
