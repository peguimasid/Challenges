/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[][]}
 */
function divideArray(nums, k) {
  const sub = nums
    .toSorted((a, b) => a - b)
    .reduce(
      (acc, curr, index) => {
        acc[Math.floor(index / 3)].push(curr);
        return acc;
      },
      new Array(Math.floor(nums.length / 3)).fill(null).map(() => [])
    );

  for (const array of sub) {
    if (array[array.length - 1] - array[0] > k) return [];
  }

  return sub;
}

console.log(divideArray([1, 3, 4, 8, 7, 9, 3, 5, 1], 2)); // [[1,1,3],[3,4,5],[7,8,9]]
console.log(divideArray([1, 3, 3, 2, 7, 3], 3)); // []

// divide in size of 3
// each element should be in just one array
// the difference between the elements can be greater than K
