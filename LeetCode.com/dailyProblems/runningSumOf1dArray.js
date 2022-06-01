/**
 * @param {number[]} nums
 * @return {number[]}
 */
const runningSum = (nums) => {
  let memo = 0;
  let result;

  return nums.map((num) => {
    result = num + memo;
    memo += num;
    return result;
  });
};

console.log(runningSum([1, 2, 3, 4]));
