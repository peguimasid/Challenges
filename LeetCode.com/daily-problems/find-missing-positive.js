/**
 * @param {number[]} nums
 * @return {number}
 */
function firstMissingPositive(nums) {
  return nums
    .toSorted((a, b) => a - b)
    .reduce((acc, curr) => (acc += curr === acc ? 1 : 0), 1);
}

console.log(firstMissingPositive([1, 2, 0])); // 3
console.log(firstMissingPositive([3, 4, -1, 1])); // 2
console.log(firstMissingPositive([7, 8, 9, 11, 12])); // 1
console.log(firstMissingPositive([0, 2, 2, 1, 1])); // 3
