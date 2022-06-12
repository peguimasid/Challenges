/**
 * @param {number[]} nums
 * @return {number}
 */
const maximumUniqueSubarray = (nums) => {
  let result = -Infinity;

  for (let i = 0; i < nums.length; i++) {
    let curr = [];

    for (let j = i; j < nums.length; j++) {
      if (curr.includes(nums[j])) break;

      curr.push(nums[j]);
    }

    if (curr.reduce((a, b) => a + b) > result)
      result = curr.reduce((a, b) => a + b);
  }

  return result;
};

console.log(maximumUniqueSubarray([4, 2, 4, 5, 6]));
console.log(maximumUniqueSubarray([5, 2, 1, 2, 5, 2, 1, 2, 5]));
