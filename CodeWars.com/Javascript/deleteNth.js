/**
 * @param {number[]} arr
 * @param {number} n
 * @return {number[]}
 */
function deleteNth(arr, n) {
  const frequency = {};
  return arr.filter((num) => {
    frequency[num] = (frequency[num] || 0) + 1;
    return frequency[num] <= n;
  });
}

console.log(deleteNth([20, 37, 20, 21], 1)); //  [20,37,21]
console.log(deleteNth([1, 1, 3, 3, 7, 2, 2, 2, 2], 3)); //  [1, 1, 3, 3, 7, 2, 2, 2]
