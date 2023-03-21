/**
 * @param {number[]} nums
 * @return {number}
 */
const zeroFilledSubarray = (nums) => {
  let result = 0;
  let length = 0;

  for (const num of nums) {
    if (num === 0) {
      result += ++length;
    } else {
      length = 0;
    }
  }

  return result;
};

console.log(zeroFilledSubarray([1, 0, 0, 1, 0, 1, 1, 0, 1, 0, 1])); // 8
console.log(zeroFilledSubarray([1, 1, 1, 1, 1])); // 0
console.log(zeroFilledSubarray([0, 0, 0, 0, 0])); // 15
