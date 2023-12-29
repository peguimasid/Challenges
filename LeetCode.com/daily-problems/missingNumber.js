/**
 * @param {number[]} nums
 * @return {number}
 */
const missingNumber = (nums) => {
  const max = Math.max(...nums);
  const all = new Array(max + 1).fill().map((_, index) => index);
  const filter = all.filter((num) => !nums.includes(num));

  return filter.length ? filter[0] : max + 1;
};

console.log(missingNumber([3, 0, 1]));
console.log(missingNumber([0, 1]));
