function swap(i, j, array) {
  let result = [...array];

  let temp = result[i];
  result[i] = result[j];
  result[j] = temp;

  return result;
}

function largestPermutation(k, arr) {
  let max = Math.max(...arr);

  let idx = 0;
  let hash = arr.reduce(
    (acc, currentValue, index) => acc.set(currentValue, index),
    new Map()
  );

  let i = 0;

  while (i < k && i < arr.length) {
    if (!hash.has(max)) {
      max--;
      i++;
    } else if (arr[idx] === max) {
      idx++;
      max--;
    } else {
      const maxIdx = hash.get(max);
      hash.set(arr[idx], maxIdx);
      hash.set(max, idx);
      arr[maxIdx] = arr[idx];
      arr[idx++] = max--;
      i++;
    }
  }

  return arr;
}

console.log(largestPermutation(1, [1, 2, 3, 4]));
// console.log(largestPermutation(1, [4, 2, 3, 5, 1]));
// console.log(largestPermutation(1, [2, 1]));
