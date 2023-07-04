/**
 * @param {number[]} nums
 * @return {number}
 */
const singleNumber = (nums) => {
  const frequency = nums.reduce((acc, curr) => {
    acc[curr] = (acc[curr] || 0) + 1;
    return acc;
  }, {});

  const [num] = Object.entries(frequency).filter(([, freq]) => freq === 1);

  return Number(num[0]);
};

console.log(singleNumber([2, 2, 3, 2])); // 3
console.log(singleNumber([0, 1, 0, 1, 0, 1, 99])); // 99
