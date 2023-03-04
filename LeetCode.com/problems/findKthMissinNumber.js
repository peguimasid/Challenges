/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
const findKthPositive = (arr, k) => {
  let missingCount = 0;

  let i = 0;

  while (missingCount <= k) {
    if (!arr.includes(i)) missingCount++;
    i++;
  }

  return i - 1;
};

console.log(findKthPositive([2, 3, 4, 7, 11], 5));
console.log(findKthPositive([1, 2, 3, 4], 2));
console.log(findKthPositive([1, 2], 1));
