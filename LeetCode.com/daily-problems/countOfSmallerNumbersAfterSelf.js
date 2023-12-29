/**
 * @param {number[]} nums
 * @return {number[]}
 */
const countSmaller = (nums) => {
  return nums.map((num, index, arr) =>
    arr.slice(index + 1).reduce((acc, curr) => (acc += curr < num ? 1 : 0), 0)
  );
};

console.log(countSmaller([5, 2, 6, 1]));
