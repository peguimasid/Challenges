/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const subsetsWithDup = (nums) => {
  const result = [];
  nums.sort((a, b) => a - b);

  const traverse = (arr, i) => {
    if (i === nums.length) return result.push(arr);
    traverse([...arr, nums[i]], i + 1);
    while (i + 1 < nums.length && nums[i] === nums[i + 1]) i++;
    traverse([...arr], i + 1);
  };

  traverse([], 0);
  return result;
};

console.log(subsetsWithDup([1, 2, 2])); // [[],[1],[1,2],[1,2,2],[2],[2,2]]
console.log(subsetsWithDup([0])); // [[],[0]]
