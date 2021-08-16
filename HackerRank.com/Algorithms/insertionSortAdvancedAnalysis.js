const getSum = (BITree, index) => {
  let sum = 0;

  while (index > 0) {
    sum += BITree[index];
    index -= index & -index;
  }

  return sum;
};

const updateBIT = (BITree, index, n, val) => {
  while (index <= n) {
    BITree[index] += val;
    index += index & -index;
  }

  return BITree;
};

const getInvCount = (arr) =>
  ((maxEl) =>
    arr.reduceRight(
      (accObj, el) => {
        return {
          count: accObj.count + getSum(accObj.BIT, el - 1),
          BIT: updateBIT(accObj.BIT, el, maxEl, 1),
        };
      },

      { count: 0, BIT: Array(maxEl + 1).fill(0) }
    ).count)(
    arr.reduce(
      (maxVal, el) => (el > maxVal ? el : maxVal),
      -Number.MAX_SAFE_INTEGER
    )
  );

function insertionSort(arr) {
  return getInvCount(arr);
}

console.log(insertionSort([2, 1, 3, 1, 2]));
