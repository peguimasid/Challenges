/**
 * @param {number[]} nums
 * @return {number[]}
 */
const findDisappearedNumbers = (nums) => {
  return Array(nums.length)
    .fill()
    .map((_, index) => index + 1)
    .filter((num) => !nums.includes(num));
};

console.log(findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1]));
console.log(findDisappearedNumbers([1, 1]));
