/**
 * @param {number[]} nums
 * @return {number}
 */
const longestConsecutive = (nums) => {
  let result = 0;
  // start a hash
  const hash = new Set(nums);

  // run in every element in nums
  for (let i = 0; i < nums.length; i++) {
    // check if is start of subsequence
    //   (if does not have a element 1 unit smaller than him, its true)
    if (!hash.has(nums[i] - 1)) {
      let j = nums[i];

      // count how many consegutive are
      while (hash.has(j)) j++;

      // set result to be the maximum between result and the num of consecutives found
      result = Math.max(result, j - nums[i]);
    }
  }

  return result;
};

console.log(longestConsecutive([9, 1, 4, 7, 3, -1, 0, 5, 8, -1, 6]));
console.log(longestConsecutive([100, 4, 200, 1, 3, 2]));
console.log(longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1]));
