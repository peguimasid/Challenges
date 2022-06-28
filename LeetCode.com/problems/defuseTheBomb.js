/**
 * @param {number[]} arr
 * @param {number} startIndex
 * @param {number} k
 * @return {number}
 */
const getProgressiveSum = (arr, startIndex, k) => {
  let result = 0;
  let i = 0;

  startIndex = startIndex + 1 >= arr.length ? 0 : startIndex + 1;
  while (i < k) {
    result += arr[startIndex];
    startIndex = startIndex + 1 >= arr.length ? 0 : startIndex + 1;
    i++;
  }

  return result;
};

/**
 * @param {number[]} arr
 * @param {number} startIndex
 * @param {number} k
 * @return {number}
 */
const getRegressiveSum = (arr, startIndex, k) => {
  let result = 0;
  let i = 0;

  startIndex = startIndex - 1 < 0 ? arr.length - 1 : startIndex - 1;
  while (i < Math.abs(k)) {
    result += arr[startIndex];
    startIndex = startIndex - 1 < 0 ? arr.length - 1 : startIndex - 1;
    i++;
  }

  return result;
};

/**
 * @param {number[]} code
 * @param {number} k
 * @return {number[]}
 */
const decrypt = (code, k) => {
  if (k > 0) return code.map((_, index) => getProgressiveSum(code, index, k));
  if (k < 0) return code.map((_, index) => getRegressiveSum(code, index, k));
  if (k === 0) return Array(code.length).fill(0);
};

console.log(decrypt([5, 7, 1, 4], 3));
console.log(decrypt([2, 4, 9, 3], -2));

// If k > 0, replace the ith number with the sum of the next k numbers.
// If k < 0, replace the ith number with the sum of the previous k numbers.
// If k == 0, replace the ith number with 0.
