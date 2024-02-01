/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[][]}
 */
function divideArray(nums, k) {
  nums.sort((a, b) => a - b);

  const sub = new Array(Math.floor(nums.length / 3)).fill(null).map(() => []);

  for (let i = 0; i < nums.length; i++) {
    const index = Math.floor(i / 3);
    sub[index].push(nums[i]);
  }

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
