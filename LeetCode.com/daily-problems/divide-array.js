/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[][]}
 */
function divideArray(nums, k) {
  if (nums.length % 3 !== 0) return [];

  nums.sort((a, b) => a - b);

  const result = [];

  for (let i = 0; i < nums.length; i += 3) {
    if (nums[i + 2] - nums[i] > k) return [];
    result.push([nums[i], nums[i + 1], nums[i + 2]]);
  }

  return result;
}

console.log(divideArray([1, 3, 4, 8, 7, 9, 3, 5, 1], 2)); // [[1,1,3],[3,4,5],[7,8,9]]
console.log(divideArray([1, 3, 3, 2, 7, 3], 3)); // []

// divide in size of 3
// each element should be in just one array
// the difference between the elements can be greater than K
