/**
 * @param {number[]} nums
 * @return {number}
 */
const singleNumber = (nums) =>
  Object.entries(
    nums.reduce((acc, curr) => {
      if (!acc[curr]) acc[curr] = 0;
      acc[curr]++;
      return acc;
    }, {})
  ).find((num) => num[1] === 1)[0];

console.log(singleNumber([4, 1, 2, 1, 2]));
