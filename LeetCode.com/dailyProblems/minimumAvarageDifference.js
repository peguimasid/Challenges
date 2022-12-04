/**
 * @param {number[]} nums
 * @return {number}
 */
const minimumAverageDifference = (nums) => {
  let result = -1;
  let min = Infinity;

  let leftSum = 0;
  let rightSum = nums.reduce((acc, curr) => acc + curr);

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    leftSum += num;
    rightSum -= num;
    const leftAvg = Math.floor(leftSum / (i + 1));
    const rightAvg =
      i < nums.length ? Math.floor(rightSum / (nums.length - i - 1)) : 0;
    const abs = Math.abs(leftAvg - rightAvg);
    if (abs < min) {
      min = abs;
      result = i;
    }
  }

  return result;
};

console.log(minimumAverageDifference([5, 4, 3, 2, 1]));
console.log(minimumAverageDifference([2, 5, 3, 9, 5, 3]));
