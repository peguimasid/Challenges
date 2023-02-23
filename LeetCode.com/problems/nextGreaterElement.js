/**
 * @param {number[]} nums
 * @return {number[]}
 */
const nextGreaterElements = (nums) => {
  const result = [];

  for (let i = 0; i < nums.length; i++) {
    result.push(nextGreater(i, nums));
  }

  return result;
};

/**
 * @param {number} index
 * @param {number[]} nums
 * @return {number[]}
 */
const nextGreater = (index, nums) => {
  const after = nums.slice(index + 1);
  const afterMax = after.find((num) => num > nums[index]);
  if (afterMax > nums[index]) return afterMax;
  const before = nums.slice(0, index);
  const beforeMax = before.find((num) => num > nums[index]);
  if (beforeMax > nums[index]) return beforeMax;
  return -1;
};

console.log(nextGreaterElements([1, 2, 1])); // [2, -1, 2]
console.log(nextGreaterElements([1, 2, 3, 4, 3])); // [2,3,4,-1,4]
