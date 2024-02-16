/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
function findLeastNumOfUniqueInts(arr, k) {
  const frequency = arr.reduce((acc, curr) => {
    acc[curr] = (acc[curr] || 0) + 1;
    return acc;
  }, {});

  const values = Object.values(frequency).sort((a, b) => a - b);

  let completelyRemoved = 0;

  for (const frequency of values) {
    if (k <= 0) break;
    if (k < frequency) break;
    if (k >= frequency) {
      completelyRemoved++;
      k -= frequency;
    }
  }

  return values.length - completelyRemoved;
}

console.log(findLeastNumOfUniqueInts([5, 5, 4], 1)); // 1
console.log(findLeastNumOfUniqueInts([4, 3, 1, 1, 3, 3, 2], 3)); // 2
console.log(findLeastNumOfUniqueInts([1, 1, 2, 2, 3, 3], 3)); // 2
